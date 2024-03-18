import { json } from '@sveltejs/kit';
import Stripe from 'stripe'
import {
  env_url,
  sk,
  price_id
} from '$env/static/private'

const stripe = Stripe(sk)

export async function POST({ request }) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: price_id,
        quantity: 1,
      }
    ],
    mode: 'payment',
    ui_mode: 'embedded',
    return_url: `${env_url}?session_id={CHECKOUT_SESSION_ID}`,
  })
  return json({
    clientSecret: session.client_secret
  })
}