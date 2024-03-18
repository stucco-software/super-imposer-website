<script type="text/javascript">
  import { onMount } from 'svelte'
  import { PUBLIC_KEY } from '$env/static/public';
  let pk = "pk_test_IPh4GEZwzWqYJpJk6IlsPSKo00uE3TakDg"

  onMount(async () => {
    const stripe = Stripe(pk)

    // Create a Checkout Session as soon as the page loads
    const init = async () => {
      const response = await fetch("/session", {
        method: "POST",
      })
      const { clientSecret } = await response.json()
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
      })
      checkout.mount('#checkout')
    }

    init()
  })

</script>

<div id="checkout"></div>