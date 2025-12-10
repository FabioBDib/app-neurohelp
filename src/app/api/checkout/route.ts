import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
})

const PLANS = {
  basic: {
    price: 9700, // R$ 97.00 em centavos
    name: 'Plano Básico',
  },
  professional: {
    price: 19700, // R$ 197.00 em centavos
    name: 'Plano Profissional',
  },
  clinic: {
    price: 39700, // R$ 397.00 em centavos
    name: 'Plano Clínica',
  },
}

export async function POST(req: NextRequest) {
  try {
    const { plan, userId } = await req.json()

    if (!plan || !PLANS[plan as keyof typeof PLANS]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const selectedPlan = PLANS[plan as keyof typeof PLANS]

    // Criar sessão de checkout do Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: selectedPlan.name,
              description: `Assinatura mensal do ${selectedPlan.name} do NeuroHelp`,
            },
            unit_amount: selectedPlan.price,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.get('origin')}/dashboard?success=true`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
      metadata: {
        plan,
        user_id: userId,
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
