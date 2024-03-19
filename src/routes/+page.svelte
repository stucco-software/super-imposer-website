<script type="text/javascript">
  import Logo from '$lib/Logo.svelte'
  // import Checkout from '$lib/Checkout.svelte'
  import { page } from '$app/stores'


  let dialog
  const openDialog = () => {
    dialog.showModal()
  }
  const closeDialog = () => {
    dialog.close()
  }
</script>

<dialog bind:this={dialog}>
  <!-- <Checkout /> -->
  <p class="center">
    <button on:click={closeDialog}>
      Nevermind
    </button>
  </p>
</dialog>

<header id="head">
  <Logo />

  <h1>
    Super Imposer 3000
  </h1>
  <div class="grid">

    <p>
      Impose PDFs into booklets for&nbsp;printing.
    </p>

    <aside>
      <ul>
        <li>2-up, 4-up, N-up layouts.</li>
        <li>As many signatures as you need.</li>
        <li>Save project imposition settings.</li>
      </ul>
    </aside>
  </div>
</header>

<main>
  <section>
    <h2 id="download">
      Download
    </h2>
    <p>
      <a
        class="button"
        href="https://github.com/stucco-software/super-imposer/releases/download/app-v24.3.12/Super.Imposer_24.3.12_x64.dmg">
        Mac
      </a>
      <a
        class="button"
        href="https://github.com/stucco-software/super-imposer/releases/download/app-v24.3.12/Super.Imposer_24.3.12_x64_en-US.msi.zip">
        Windows
      </a>
      <a
        href="https://releases.super-imposer.stucco.software/">
        More…
      </a>
    </p>

    <p class="small">
      v.24.03.12
    </p>
  </section>

  <section>
    <h2 id="purchase">
      Purchase
    </h2>

    <div class="grid">
      <div>
        <p>
          Super Imposer 3000 is free, community supported software. Choose-your-price donations allows us to keep working on projects like this.
        </p>
      </div>

      <p class="big-center">
        <!-- <Checkout /> -->
        {#if $page.url.searchParams.get('session_id')}
          <b>Thank you</b> for supporting <b>Super Imposer</b>
        {:else}
          <a
            class="button"
            href="https://buy.stripe.com/28ocPhgWg0UteJO000">
            Purchase
          </a>
          <!-- <button on:click={openDialog}>
            Purchase
          </button> -->
        {/if}
      </p>
    </div>


  </section>

  <section>
    <h2 id="docs">
      Documentation
    </h2>
    <ol>
      <li>
        <a href="#new-projects">
          New Projects
        </a>
        <ol>
          <li>
            <a href="#import-pdf">
              Import PDF
            </a>
          </li>
          <li>
            <a href="#imposition-options">
              Imposition Options
            </a>
          </li>
          <li>
            <a href="#preview-pdf">
              Preview
            </a>
          </li>
          <li>
            <a href="#output-pdf">
              Output Imposed PDF
            </a>
          </li>
        </ol>
      </li>
<!--       <li>
        Projects
        <ol>
          <li>Saving Project Settings</li>
          <li>Using Saved Projects</li>
        </ol>
      </li>
      <li>
        Default Settings
      </li> -->
    </ol>
  </section>
  <section>
    <article>
      <section>
        <h3 id="new-project">
          1. New Projects
        </h3>

        <div class="grid">
          <figure>
            <img
              alt="The default state of the new project screen, showing inputs for seleting a source PDF, as well as output signature options."
              src="new-screen.png">
            <caption>New Screen</caption>
          </figure>

          <div>
            <p>
              When you open <b>Super Imposer 3000</b> you will see the new project window. You can open this screen whenever you want to start a new project with <b>File > New</b> or <kbd>Cmd+N</kbd>.
            </p>

            <p>
              The controls and settings will be disabled until an input PDF is selected.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h4 id="import-pdf">
          1.1 Import PDF
        </h4>
        <div class="grid">
          <figure>
            <img
              src="input-pdf.png">
            <caption>PDF Selected</caption>
          </figure>

          <div>
            <p>
              Clicking <b>Choose File</b> will open a file picker window. Select your <em>source PDF</em> – this is the file you want to impose for print.
            </p>

            <p>
              Once the PDF has loaded, the count of how many pages are in the PDF will be displayed. For best results, the total number of pages should be divisble by <b>4</b>.
            </p>

            <p>
              The inputs for <a href="#imposition-options">signature settings</a> will be enabled, as will the buttons for <a href="#preview-pdf">previewing</a> and <a href="#output-pdf">outputing</a> the imposed PDF.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h4 id="imposition-options">
          1.2 Imposition Options
        </h4>
        <div class="grid">
          <figure>
            <img
              alt="Setting the number of sigatures will adjust how many pages per signature are created."
              src="/signature-settings.png">
            <caption>
              Signature Settings
            </caption>
          </figure>
          <div>
            <p>
              By <a href="#default-settings">default</a>, the PDF will be imposed with a single signature, with pages placed on the sheet <b>2-up</b>.
            </p>

            <p>
              A PDF can be imposed into multiple signatures. Adjusting the <b>Output Signatures</b> count will show a preview of how many pages will be placed on each sheet. This number should be a nice, round integer, like <b>16</b> or <b>8</b>.
            </p>

            <p>
              <em>Note: In future versions, Super Imposer may calculate if the seleted signature count is incompatible with your layout.</em>
            </p>
          </div>
        </div>
      </section>
      <section>
        <h4 id="preview-pdf">
          1.3 Preview
        </h4>
        <div class="grid">
          <figure>
            <img
              alt="The imposed PDF, rendered in the Preview window."
              src="preview-pdf.png">
            <caption>
              PDF Preview
            </caption>
          </figure>
          <div>
            <p>
              Press the <b>Preview</b> button, select <b>View > Preview</b>, or press <kbd>Cmd+P</kbd>.
            </p>

            <p>
              The Preview window shows the entire imposed PDF.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h4 id="output-pdf">
          1.4 Output Imposed PDF
        </h4>
        <div class="grid">
          <figure>
            <img
              alt="Save file dialog, showing the location of the final PDF export."
              src="save-pdf.png">
            <caption>
              Save PDF
            </caption>
          </figure>
          <div>
            <p>
              <b>Output</b>, <b>File > Impose PDF</b>, or <kbd>Cmd+Shift+E</kbd> will open a save file dialog. Select the location and name of your PDF and press <b>Save</b>.
            </p>
          </div>
        </div>
      </section>
    </article>

    <!-- <article>
      <section>
        <h3 id="projects">
          2. Projects
        </h3>

        <p>
          A collection of settings is called a <b>project</b>. Super Imposer 3000 can save these settings for future use, if you need to apply the same impostion to other PDFs in the future.
        </p>
      </section>

      <section>
        <h4 id="saving-projects">
          2.1 Saving Projects
        </h4>
        <div class="grid">
          <figure>
            <img
              alt=""
              src="">
            <caption>

            </caption>
          </figure>

          <div>
            <p>

            </p>
          </div>
        </div>
      </section>
     <section>
        <h4 id="using-saved-projects">
          2.2 Using Saved Projects
        </h4>
        <div class="grid">
          <figure>
            <img
              alt=""
              src="">
            <caption>

            </caption>
          </figure>

          <div>
            <p>

            </p>
          </div>
        </div>
      </section>
    </article>

    <article>
      <section>
        <h3 id="default-settings">
          3. Default Settings
        </h3>

        <div class="grid">
          <figure>
            <img
              alt="">
            <caption>

            </caption>
          </figure>

          <div>
            <p>

            </p>
          </div>
        </div>
      </section>
    </article>
 -->

  </section>

</main>

<footer>
  <p>
    <a href="#download">Download</a>
    <a href="#docs">Docs</a>
    <a href="#purchase">Purchase</a>
  </p>
  <p>
    By <a href="https://stucco.software">Stucco Software</a>
  </p>
</footer>