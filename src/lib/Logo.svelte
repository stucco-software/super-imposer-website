<script type="text/javascript">
  import { onMount } from 'svelte'

  let shifty_eyes = false

  const lookLeft = (arr) => {
    arr.forEach(px => {
      px.classList.add('shifty')
    })
  }

  const lookRight = (arr) => {
    arr.forEach(px => {
      px.classList.remove('shifty')
    })
  }

  const watchMouse = (shift, eye_pixels) => (event) => {
    if (event.x < shift) {
      if (!shifty_eyes) {
        lookLeft(eye_pixels)
        shifty_eyes = true
      }
    } else {
      if (shifty_eyes) {
        lookRight(eye_pixels)
        shifty_eyes = false
      }
    }
  }

  const main = async () => {
    const shift = 125
    const eye_pixels = [...document.querySelectorAll('.pupil')]
    window.addEventListener("mousemove", watchMouse(shift, eye_pixels))
  }

  onMount(async () => {
    main()
  })
</script>
<svg
  id="defaultID"
  viewBox="0 0 26 26"
  width="185px"
  height="185px">
  <rect x="5" y="2"></rect>
  <rect x="8" y="2"></rect>
  <rect x="17" y="2"></rect>
  <rect x="20" y="2"></rect>
  <rect x="6" y="23"></rect>
  <rect x="7" y="23"></rect>
  <rect x="6" y="20"></rect>
  <rect x="7" y="20"></rect>
  <rect x="8" y="19"></rect>
  <rect x="5" y="19"></rect>
  <rect x="5" y="17"></rect>
  <rect x="5" y="18"></rect>
  <rect x="5" y="15"></rect>
  <rect x="5" y="16"></rect>
  <rect x="5" y="14"></rect>
  <rect x="5" y="13"></rect>
  <rect x="5" y="12"></rect>
  <rect x="5" y="11"></rect>
  <rect x="5" y="10"></rect>
  <rect x="5" y="9"></rect>
  <rect x="5" y="8"></rect>
  <rect x="5" y="7"></rect>
  <rect x="5" y="6"></rect>
  <rect x="5" y="5"></rect>
  <rect x="5" y="4"></rect>
  <rect x="5" y="3"></rect>
  <rect x="8" y="3"></rect>
  <rect x="8" y="4"></rect>
  <rect x="8" y="5"></rect>
  <rect x="8" y="6"></rect>
  <rect x="8" y="7"></rect>
  <rect x="8" y="8"></rect>
  <rect x="8" y="9"></rect>
  <rect x="8" y="10"></rect>
  <rect x="8" y="11"></rect>
  <rect x="8" y="12"></rect>
  <rect x="8" y="13"></rect>
  <rect x="8" y="14"></rect>
  <rect x="8" y="15"></rect>
  <rect x="8" y="16"></rect>
  <rect x="8" y="17"></rect>
  <rect x="8" y="18"></rect>
  <rect x="11" y="3"></rect>
  <rect x="11" y="4"></rect>
  <rect x="11" y="5"></rect>
  <rect x="11" y="6"></rect>
  <rect x="11" y="7"></rect>
  <rect x="11" y="8"></rect>
  <rect x="11" y="9"></rect>
  <rect x="11" y="10"></rect>
  <rect x="11" y="11"></rect>
  <rect x="11" y="12"></rect>
  <rect x="11" y="13"></rect>
  <rect x="11" y="14"></rect>
  <rect x="11" y="15"></rect>
  <rect x="11" y="16"></rect>
  <rect x="11" y="17"></rect>
  <rect x="11" y="18"></rect>
  <rect x="11" y="19"></rect>
  <rect x="11" y="20"></rect>
  <rect x="2" y="20"></rect>
  <rect x="2" y="19"></rect>
  <rect x="2" y="18"></rect>
  <rect x="2" y="17"></rect>
  <rect x="2" y="16"></rect>
  <rect x="2" y="15"></rect>
  <rect x="2" y="14"></rect>
  <rect x="2" y="13"></rect>
  <rect x="2" y="12"></rect>
  <rect x="2" y="11"></rect>
  <rect x="2" y="10"></rect>
  <rect x="2" y="7"></rect>
  <rect x="2" y="6"></rect>
  <rect x="2" y="5"></rect>
  <rect x="2" y="4"></rect>
  <rect x="2" y="3"></rect>
  <rect x="2" y="9"></rect>
  <rect x="2" y="8"></rect>
  <rect x="5" y="23"></rect>
  <rect x="4" y="22"></rect>
  <rect x="3" y="21"></rect>
  <rect x="8" y="23"></rect>
  <rect x="9" y="22"></rect>
  <rect x="10" y="21"></rect>
  <rect x="14" y="3"></rect>
  <rect x="14" y="4"></rect>
  <rect x="14" y="5"></rect>
  <rect x="14" y="6"></rect>
  <rect x="14" y="7"></rect>
  <rect x="14" y="8"></rect>
  <rect x="14" y="9"></rect>
  <rect x="14" y="10"></rect>
  <rect x="14" y="11"></rect>
  <rect x="14" y="12"></rect>
  <rect x="14" y="13"></rect>
  <rect x="14" y="14"></rect>
  <rect x="14" y="15"></rect>
  <rect x="14" y="16"></rect>
  <rect x="14" y="17"></rect>
  <rect x="14" y="18"></rect>
  <rect x="14" y="19"></rect>
  <rect x="14" y="20"></rect>
  <rect x="17" y="3"></rect>
  <rect x="17" y="4"></rect>
  <rect x="17" y="5"></rect>
  <rect x="17" y="6"></rect>
  <rect x="17" y="7"></rect>
  <rect x="17" y="8"></rect>
  <rect x="17" y="9"></rect>
  <rect x="17" y="10"></rect>
  <rect x="17" y="11"></rect>
  <rect x="17" y="12"></rect>
  <rect x="17" y="13"></rect>
  <rect x="17" y="14"></rect>
  <rect x="17" y="15"></rect>
  <rect x="17" y="16"></rect>
  <rect x="17" y="17"></rect>
  <rect x="17" y="18"></rect>
  <rect x="17" y="19"></rect>
  <rect x="18" y="20"></rect>
  <rect x="19" y="20"></rect>
  <rect x="20" y="19"></rect>
  <rect x="20" y="18"></rect>
  <rect x="20" y="17"></rect>
  <rect x="20" y="16"></rect>
  <rect x="20" y="15"></rect>
  <rect x="20" y="14"></rect>
  <rect x="20" y="13"></rect>
  <rect x="20" y="12"></rect>
  <rect x="20" y="11"></rect>
  <rect x="20" y="10"></rect>
  <rect x="20" y="9"></rect>
  <rect x="20" y="8"></rect>
  <rect x="20" y="7"></rect>
  <rect x="20" y="6"></rect>
  <rect x="20" y="5"></rect>
  <rect x="20" y="4"></rect>
  <rect x="20" y="3"></rect>
  <rect x="23" y="3"></rect>
  <rect x="23" y="4"></rect>
  <rect x="23" y="5"></rect>
  <rect x="23" y="6"></rect>
  <rect x="23" y="7"></rect>
  <rect x="23" y="8"></rect>
  <rect x="23" y="9"></rect>
  <rect x="23" y="10"></rect>
  <rect x="23" y="11"></rect>
  <rect x="23" y="13"></rect>
  <rect x="23" y="14"></rect>
  <rect x="23" y="12"></rect>
  <rect x="23" y="15"></rect>
  <rect x="23" y="16"></rect>
  <rect x="23" y="17"></rect>
  <rect x="23" y="18"></rect>
  <rect x="23" y="19"></rect>
  <rect x="23" y="20"></rect>
  <rect x="15" y="21"></rect>
  <rect x="16" y="22"></rect>
  <rect x="17" y="23"></rect>
  <rect x="18" y="23"></rect>
  <rect x="19" y="23"></rect>
  <rect x="21" y="22"></rect>
  <rect x="22" y="21"></rect>
  <rect x="20" y="23"></rect>
  <rect x="23" y="2"></rect>
  <rect x="14" y="2"></rect>
  <rect x="11" y="2"></rect>
  <rect x="2" y="2"></rect>

  <rect class="pupil" x="7" y="5"></rect>
  <rect class="pupil" x="7" y="6"></rect>
  <rect class="pupil" x="7" y="7"></rect>
  <rect class="pupil" x="7" y="8"></rect>
  <rect class="pupil" x="7" y="9"></rect>
  <rect class="pupil" x="7" y="10"></rect>
  <rect class="pupil" x="7" y="11"></rect>
  <rect class="pupil" x="7" y="12"></rect>
  <rect class="pupil" x="7" y="13"></rect>
  <rect class="pupil" x="7" y="15"></rect>
  <rect class="pupil" x="7" y="14"></rect>
  <rect class="pupil" x="7" y="17"></rect>

  <rect class="pupil" x="19" y="17"></rect>
  <rect class="pupil" x="19" y="15"></rect>
  <rect class="pupil" x="19" y="13"></rect>
  <rect class="pupil" x="19" y="10"></rect>
  <rect class="pupil" x="19" y="7"></rect>
  <rect class="pupil" x="19" y="8"></rect>
  <rect class="pupil" x="19" y="9"></rect>
  <rect class="pupil" x="19" y="11"></rect>
  <rect class="pupil" x="19" y="12"></rect>
  <rect class="pupil" x="19" y="14"></rect>
  <rect class="pupil" x="19" y="6"></rect>
  <rect class="pupil" x="19" y="5"></rect>
</svg>

<style type="text/css">
  svg {
    margin: auto;
    border: 4px solid var(--black);
    background: var(--blank);
  }
  rect {
    width: 1px;
    height: 1px;
    fill: var(--black);
  }
  :global(.pupil) {
    transform: translate3d(0, 0, 0);
    transition: transform linear 100ms;
  }
  :global(.pupil.shifty) {
    transform: translate3d(-1px, 0, 0);
    transition: transform linear 100ms;
  }
</style>