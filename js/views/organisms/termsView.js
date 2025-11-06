import { Div, Heading, Paragraph, LINK, UL, LI } from "../atoms/index.js";

// Returns the content element for the Terms page (does NOT wrap in Layout)
export const TermsView = () => {
  // include terms-page so the page-content grid places the TOC in the left column
  const element = Div("page-content terms-page");
  const heading = Heading("Handelsbetingelser", 2, "HeadingTerms");

  // Publisher / contact
  const genH = Heading("Generelle oplysninger", 3);
  const genP = Paragraph();
  genP.innerText =
    "SgtPrepper\nEksempelvej 1\n1234 by\nCVR nr.: 12345678\nTelefon: +45 12 34 56 78";
  const contactP = Paragraph();
  contactP.append(document.createTextNode("Email: "));
  contactP.append(LINK("mailto:info@example.com", "info@example.com", ""));

  // Prices
  const pricesH = Heading("Priser", 3);
  const pricesP = Paragraph();
  pricesP.innerText =
    "Hos SgtPrepper er alle priserne i danske kroner og angivet inkl. moms og afgifter. Vi forbeholder os ret til fra dag til dag at ændre i priserne uden forudgående samtykke. Der tages forbehold for udsolgte varer.";

  // Payment
  const payH = Heading("Betaling", 3);
  const payP = Paragraph();
  payP.innerText =
    "SgtPrepper modtager betaling med VISA-Dankort, VISA, VISA Electron, Mastercard, PayPal, MobilePay, Bankoverførsel. Betalingen vil først blive trukket på din konto, når varen afsendes. Alle beløb er i DKK. Danske kroner og incl. moms. Der tages forbehold for prisfejl og udsolgte/udgåede varer.";

  // Delivery
  const delH = Heading("Levering", 3);
  const delP = Paragraph();
  delP.innerText =
    "SgtPrepper tilstræber at afsende ordre indgået inden kl. 17 samme dag, ordre herefter sendes næstfølgende hverdag. Vi sender til hele Danmark. Fragtpriser fra 35 kr. Varer vil blive leveret på leveringsadressen, der angives ved bestillingen. Vi leverer ikke til udlandet og ikke til Færøerne og Grønland. Dine varer sendes med Post Nord eller GLS. OBS: Hvis der ikke er plads på udleveringsstedet bliver pakken flyttet til nærmeste udleveringssted, hvilket du får besked om. Opstår der problemer, kontakt da kundeservice. Der leveres varer alle ugens hverdage. Din vare vil blive leveret 1-3 hverdage efter bestillingen. For visse varer gælder særlige leveringsvilkår. Betingelserne vil fremgå specifikt forud for køb af disse varer.";

  // Complaints / warranty
  const reclH = Heading("Reklamationsret", 3);
  const reclP = Paragraph();
  reclP.innerText =
    'Der gives 2 års reklamationsret i henhold til købeloven. Vores reklamationsret gælder for fejl i materiale og/eller fabrikation. Du kan få varen repareret, ombyttet, pengene retur eller afslag i prisen, afhængig af den konkrete situation. Reklamationen gælder ikke fejl eller skader begået ved forkert håndtering af produktet/ydelsen. Du skal reklamere i "rimelig tid" efter du har opdaget manglen/fejlen. SgtPrepper vil dække returneringsomkostninger i et rimeligt omfang.';

  const returnToH = Heading("Ved returnering, reklamationer og fortrydelse", 4);
  const returnToP = Paragraph();
  returnToP.innerText =
    "Ved returnering, reklamationer og benyttelse af fortrydelsesretten sendes til:\nSgtPrepper\nEksempelvej 1\n1234 by\nDer modtages ikke forsendelser pr. efterkrav.";

  // Refund
  const refH = Heading("Refusion", 3);
  const refP = Paragraph();
  refP.innerText =
    "Hvis der er tale om refusion, bedes du medsende bankoplysninger i form af regnr og kontonr, så det aftalte beløb kan overføres. Disse oplysninger kan uden risiko oplyses pr. mail eller anden elektronisk form, da det ikke er følsomme oplysninger og kun vil blive anvendt til vores opfyldelse af refusionen.";

  // Right of withdrawal
  const cancelH = Heading("Fortrydelsesret", 3);
  const cancelP = Paragraph();
  cancelP.innerText =
    "Der gives 14 dages fuld returret på varer købt i vores webshop.";

  const cancelListH = Heading("Perioden regnes fra", 4);
  const cancelList = UL();
  cancelList.append(LI());
  cancelList.lastChild.textContent = "Hvor du modtager ordren.";
  cancelList.append(LI());
  cancelList.lastChild.textContent =
    "Får den sidste vare i fysisk besiddelse, når det drejer sig om en aftale om flere forskellige varer, bestilt i én ordre, men leveres enkeltvis eller af flere omgange.";
  cancelList.append(LI());
  cancelList.lastChild.textContent =
    "Får det sidste parti, eller sidste del i fysisk besiddelse, når det drejer sig om aftale af levering af varer der består af flere partier/dele.";
  cancelList.append(LI());
  cancelList.lastChild.textContent =
    "Den første vare i fysisk besiddelse, når det drejer sig om regelmæssig levering af varer over en bestemt periode.";

  const exclH = Heading("Varer undtaget fortrydelsesretten", 3);
  const exclList = UL();
  const exclItems = [
    "Varer, som er fremstillet efter forbrugerens specifikationer eller har fået et tydeligt personligt præg.",
    "Forseglede varer, som af sundhedsbeskyttelses- eller hygiejnemæssige årsager ikke er egnet til at blive returneret, og hvor forseglingen er brudt efter leveringen.",
    "Varer, der grundet sin art bliver uløseligt blandet sammen med andre ved levering.",
    "Varer, hvor plomberingen er brudt.",
    "Udførte ikke-finansielle tjenesteydelser, hvis levering af tjenesteydelsen er påbegyndt med forbrugerens forudgående udtrykkelige samtykke og anderkendelse af, at fortrydelsesretten ophører, når tjenesteydelsen er fuldt udført.",
    "Levering af digitalt indhold, som ikke leveres på et fysisk medium, hvis udførelsen er påbegyndt med forbrugerens forudgående eksplicitte samtykke og anerkendelse heraf, at vedkommende dermed mister sin fortrydelsesret.",
    "Aviser, tidskrifter eller magasiner dog undtaget abonnementsaftaler for sådanne publikationer.",
    "Aftaler indgået på offentlig auktion.",
    "Varer, der forringes eller forældes hurtigt.",
  ];
  exclItems.forEach((i) => {
    exclList.append(LI());
    exclList.lastChild.textContent = i;
  });

  const retH = Heading("Returnering", 3);
  const retP = Paragraph();
  retP.innerText =
    "Du skal sende din ordre retur uden unødig forsinkelse og senest 14 dage efter, at du har gjort brug af din fortrydelsesret. Du skal afholde de direkte udgifter i forbindelse med returnering. Ved returnering er du ansvarlig for, at varen er pakket ordentligt ind. Du skal vedlægge en kopi af ordrebekræftelsen. Ekspeditionen går hurtigere, hvis du ligeledes udfylder og vedlægger vores Fortrydelsesformular. Du bærer risikoen for varen fra tidspunktet for varens levering og til, vi har modtaget den retur. Vi modtager ikke pakker sendt pr. efterkrav.";

  const conditionH = Heading("Varens stand ved returnering", 3);
  const conditionP = Paragraph();
  conditionP.innerText =
    "Du hæfter kun for eventuel forringelse af varens værdi, som skyldes anden håndtering, end hvad der er nødvendigt for at fastslå varens art, egenskaber og den måde, hvorpå den fungerer. Du kan med andre ord prøve varen, som hvis du prøvede den i en fysisk butik. Hvis varen er prøvet udover, det ovenfor beskrevet, betragtes den som brugt. Hvilket betyder, at du ved fortrydelse af købet kun får en del eller intet af købsbeløbet retur, afhængig af varens handelsmæssige værdi på modtagelsestidspunktet - af returneringen. For at modtage hele købsbeløbet retur må du altså afprøve varen uden egentlig at tage den i brug.";

  const paybackH = Heading("Tilbagebetaling", 3);
  const paybackP = Paragraph();
  paybackP.innerText =
    "Fortryder du dit køb, får du naturligvis det beløb du har indbetalt til os retur. I tilfælde af en værdiforringelse, som du hæfter for, fratrækkes denne købs-beløbet. Ved anvendelse af fortrydelsesretten, refunderes alle betalinger modtaget fra dig, herunder leveringsomkostninger (undtaget ekstra omkostninger som følge af dit valg af en anden leveringsform end den billigste form for standardlevering, som vi tilbyder), uden unødig forsinkelse og senest 14 dage fra den dato, hvor vi har modtaget meddelelse om din beslutning om at gøre brug af fortrydelsesretten. Tilbagebetaling gennemføres med samme betalingsmiddel, som du benyttede ved den oprindelige transaktion, medmindre du udtrykkeligt har indvilget i noget andet. Vi kan tilbageholde beløbsrefunderingen, indtil vi har modtaget varen retur, med mindre du inden da har fremlagt dokumentation for at have returneret den.";

  const pdH = Heading("Persondatapolitik", 3);
  const pdP = Paragraph();
  pdP.innerText =
    "For at du kan indgå aftale med os og handle på vores hjemmeside, har vi brug for følgende oplysninger om dig: Navn, Adresse, Telefonnummer, E-mailadresse, Oplysning om hvad du har købt. Vi behandler dine personoplysninger med det formål, at kunne levere varen til dig, og for at kunne behandle henvendelser vedrørende dit køb. Behandlingen sker efter reglerne i vores persondatapolitik for SgtPrepper. Heri kan du læse mere om, hvordan dine oplysninger behandles, hvornår de slettes, og hvilke rettigheder du har som registreret.";

  const complaintsH = Heading("Klagemuligheder – oversigt og links", 3);
  const complaintsP = Paragraph();
  complaintsP.innerText =
    "Har du en klage over et produkt, købt i vores Webshop, kan der sendes en klage til: Konkurrence- og Forbrugerstyrelsens Center for Klageløsning, Carl Jacobsens Vej 35, 2500 Valby.";
  const forbrugLinkP = Paragraph();
  forbrugLinkP.append(LINK("https://www.forbrug.dk", "www.forbrug.dk", ""));
  const odrP = Paragraph();
  odrP.append(
    LINK(
      "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DA",
      "EU online klageplatform (ODR)",
      ""
    )
  );
  const odrNote = Paragraph();
  odrNote.innerText =
    "Angiver du en klage her, skal du oplyse vores E-mail adresse: info@example.com";

  // assign stable IDs for internal navigation
  genH.id = "terms-generelle";
  pricesH.id = "terms-priser";
  payH.id = "terms-betaling";
  delH.id = "terms-levering";
  reclH.id = "terms-reklamation";
  cancelH.id = "terms-fortrydelse";
  exclH.id = "terms-undtagelser";
  retH.id = "terms-returnering";
  paybackH.id = "terms-tilbagebetaling";
  pdH.id = "terms-persondatapolitik";
  complaintsH.id = "terms-klager";

  // build a small TOC for the terms page
  const toc = Div("terms-toc");
  const tocList = document.createElement("ul");
  tocList.className = "terms-toc-list";
  const sections = [
    { id: genH.id, label: "Generelle oplysninger" },
    { id: pricesH.id, label: "Priser" },
    { id: payH.id, label: "Betaling" },
    { id: delH.id, label: "Levering" },
    { id: reclH.id, label: "Reklamationsret" },
    { id: cancelH.id, label: "Fortrydelsesret" },
    { id: exclH.id, label: "Undtagelser" },
    { id: retH.id, label: "Returnering" },
    { id: pdH.id, label: "Persondatapolitik" },
    { id: complaintsH.id, label: "Klagemuligheder" },
  ];
  sections.forEach((s) => {
    const li = document.createElement("li");
    li.className = "terms-toc-item";
    const a = LINK("#", s.label, "terms-toc-link");
    a.dataset.target = s.id;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(s.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        try {
          // update URL fragment without triggering the hashchange router
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search + "#" + s.id
          );
        } catch (err) {}
        // mark active TOC link
        try {
          document
            .querySelectorAll(".terms-toc-link")
            .forEach((el) => el.classList.remove("is-active"));
          a.classList.add("is-active");
        } catch (err) {}
      }
    });
    li.append(a);
    tocList.append(li);
  });
  toc.append(tocList);

  // small visual progress indicator inside the TOC
  const tocProgress = document.createElement("div");
  tocProgress.className = "toc-progress";
  const tocProgressFill = document.createElement("div");
  tocProgressFill.className = "toc-progress__fill";
  tocProgress.append(tocProgressFill);
  toc.append(tocProgress);

  // IntersectionObserver to highlight active TOC link and update progress for terms
  // Defer observing until the view is mounted to the document so we don't miss
  // elements that are created here but attached by the router/layout later.
  const sectionIds = sections.map((s) => s.id);

  const setActive = (id) => {
    try {
      document.querySelectorAll(".terms-toc-link").forEach((el) => {
        el.classList.toggle("is-active", el.dataset.target === id);
        if (el.dataset.target === id) el.setAttribute("aria-current", "true");
        else el.removeAttribute("aria-current");
      });
    } catch (err) {}
  };

  const updateProgress = () => {
    const sectionElems = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sectionElems.length) return;
    const first = sectionElems[0];
    const last = sectionElems[sectionElems.length - 1];
    const min = first.offsetTop;
    const max = Math.max(
      last.offsetTop + last.offsetHeight - window.innerHeight,
      min + 1
    );
    const scrolled = Math.min(Math.max(window.scrollY, min), max);
    const pct = Math.round(((scrolled - min) / (max - min)) * 100);
    tocProgressFill.style.height = pct + "%";
    tocProgressFill.setAttribute("data-progress", pct);
  };

  const io = new IntersectionObserver(
    (entries) => {
      let best = null;
      entries.forEach((ent) => {
        if (!best || ent.intersectionRatio > best.intersectionRatio) best = ent;
      });
      if (best && best.target && best.target.id) setActive(best.target.id);
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  requestAnimationFrame(() => {
    setTimeout(() => {
      const sectionElems = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      sectionElems.forEach((el) => io.observe(el));
      window.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress);
      updateProgress();
    }, 50);
  });

  // aria-live region for screen readers -> announce active TOC item
  const tocLive = document.createElement("div");
  tocLive.className = "toc-live";
  tocLive.setAttribute("aria-live", "polite");
  tocLive.setAttribute("aria-atomic", "true");
  tocLive.style.position = "absolute";
  tocLive.style.left = "-9999px";
  toc.append(tocLive);

  // enhance setActive to also announce the label to screen readers
  const _origSetActive = setActive;
  const idToLabel = Object.fromEntries(sections.map((s) => [s.id, s.label]));
  const setActiveWithAnnounce = (id) => {
    _origSetActive(id);
    try {
      const label = idToLabel[id] || "";
      if (label) tocLive.textContent = `Aktiv sektion: ${label}`;
    } catch (err) {}
  };

  // cleanup function to disconnect observer and remove listeners when navigating away
  let _cleaned = false;
  const cleanupTOC = () => {
    if (_cleaned) return;
    _cleaned = true;
    try {
      io.disconnect();
    } catch (err) {}
    try {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    } catch (err) {}
    try {
      window.removeEventListener("hashchange", cleanupTOC);
      window.removeEventListener("beforeunload", cleanupTOC);
    } catch (err) {}
  };

  // wire cleanup to common navigation events
  window.addEventListener("hashchange", cleanupTOC);
  window.addEventListener("beforeunload", cleanupTOC);

  // ensure IntersectionObserver uses the announcing setter
  requestAnimationFrame(() => {
    try {
      const visible = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .find(
          (el) =>
            el.getBoundingClientRect().top >= 0 &&
            el.getBoundingClientRect().top < window.innerHeight
        );
      if (visible) setActiveWithAnnounce(visible.id);
    } catch (err) {}
  });

  // append all nodes (TOC placed after main heading)
  element.append(
    heading,
    toc,
    genH,
    genP,
    contactP,
    pricesH,
    pricesP,
    payH,
    payP,
    delH,
    delP,
    reclH,
    reclP,
    returnToH,
    returnToP,
    refH,
    refP,
    cancelH,
    cancelP,
    cancelListH,
    cancelList,
    exclH,
    exclList,
    retH,
    retP,
    conditionH,
    conditionP,
    paybackH,
    paybackP,
    pdH,
    pdP,
    complaintsH,
    complaintsP,
    forbrugLinkP,
    odrP,
    odrNote
  );
  return element;
};
