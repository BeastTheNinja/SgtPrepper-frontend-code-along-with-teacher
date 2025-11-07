/**
 * File: js/views/organisms/privacyView.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Privacy policy view with TOC and explanatory sections.
 */
import { Div, Heading, Paragraph, LINK, UL, LI } from "../atoms/index.js";
export const PrivacyView = () => {
  const element = Div("page-content");
  const heading = Heading("Persondatapolitik", 2, "heading-privacy");

  
  const toc = Div("privacy-toc");
  const tocList = document.createElement("ul");
  tocList.className = "privacy-toc-list";
  

  element.append(heading, toc);
  
  const introH = Heading("Introduktion", 3, "subheading");
  const introP = Paragraph();
  introP.innerText =
    "Når du besøger vores website indsamles der oplysninger om dig, som bruges til at tilpasse og forbedre vores indhold og til at øge værdien af de annoncer, der vises på siden. Hvis du ikke ønsker, at der indsamles oplysninger, bør du slette dine cookies og undlade videre brug af websitet. Nedenfor har vi uddybet, hvilke informationer der indsamles, deres formål og hvilke tredjeparter, der har adgang til dem.";

  const cookiesH = Heading("Cookies", 3, "subheading");
  const cookiesP1 = Paragraph();
  cookiesP1.innerText =
    'Websitet anvender "cookies", der er en tekstfil, som gemmes på din computer, mobil el. tilsvarende med det formål at genkende den, huske indstillinger, udføre statistik og målrette annoncer. Cookies kan ikke indeholde skadelig kode som f.eks. virus.';
  const cookiesP2 = Paragraph();
  cookiesP2.innerText = "Det er muligt at slette eller blokere for cookies.";
  const cookiesP3 = Paragraph();
  cookiesP3.innerText =
    "Hvis du sletter eller blokerer cookies vil annoncer kunne blive mindre relevante for dig og optræde hyppigere. Du kan desuden risikere at websitet ikke fungerer optimalt samt at der er indhold, du ikke kan få adgang til.";

  const personH = Heading("Personoplysninger", 3, "subheading");
  const genH = Heading("Generelt", 4, "subheading-small");
  const genP = Paragraph();
  genP.innerText =
    "Personoplysninger er alle slags informationer, der i et eller andet omfang kan henføres til dig. Når du benytter vores website indsamler og behandler vi en række sådanne informationer. Det sker f.eks. ved alm. tilgang af indhold, hvis du tilmelder dig vores nyhedsbrev, deltager i konkurrencer eller undersøgelser, registrerer dig som bruger eller abonnent, øvrig brug af services eller foretager køb via websitet.";

  const typesP = Paragraph();
  typesP.innerText =
    "Vi indsamler og behandler typisk følgende typer af oplysninger: Et unikt ID og tekniske oplysninger om din computer, tablet eller mobiltelefon, dit IP-nummer, geografisk placering, samt hvilke sider du klikker på (interesser). I det omfang du selv giver eksplicit samtykke hertil og selv indtaster informationerne behandles desuden: Navn, telefonnummer, e-mail, adresse og betalingsoplysninger. Det vil typisk være i forbindelse med oprettelse af login eller ved køb.";

  const securityH = Heading("Sikkerhed", 4, "subheading-small");
  const securityP = Paragraph();
  securityP.innerText =
    "Vi behandler dine personoplysninger sikkert og fortroligt i overensstemmelse med gældende lovgivning, herunder persondataforordningen og databeskyttelsesloven. Dine oplysninger vil alene blive anvendt til det formål, de er indsamlet til, og vil blive slettet, når dette formål er opfyldt eller ikke længere relevant. Vi har truffet tekniske og organisatoriske foranstaltninger mod, at dine oplysninger hændeligt eller ulovligt bliver slettet, offentliggjort, fortabt, forringet eller kommer til uvedkommendes kendskab, misbruges eller i øvrigt behandles i strid med lovgivningen.";

  const purposeH = Heading("Formål", 4, "subheading-small");
  const purposeP = Paragraph();
  purposeP.innerText =
    "Oplysningerne bruges til at identificere dig som bruger og vise dig de annoncer, som vil have størst sandsynlighed for at være relevante for dig, at registrere dine køb og betalinger, samt at kunne levere de services, du har efterspurgt, som f.eks. at fremsende et nyhedsbrev. Herudover anvender vi oplysningerne til at optimere vores services og indhold.";

  const storageH = Heading("Periode for opbevaring", 4, "subheading-small");
  const storageP = Paragraph();
  storageP.innerText =
    "Oplysningerne opbevares i det tidsrum, der er tilladt i henhold til lovgivningen, og vi sletter dem, når de ikke længere er nødvendige. Perioden afhænger af karakteren af oplysningen og baggrunden for opbevaring. Det er derfor ikke muligt at angive en generel tidsramme for, hvornår informationer slettes.";

  const disclosureH = Heading(
    "Videregivelse af oplysninger",
    4,
    "subheading-small"
  );
  const disclosureP = Paragraph();
  disclosureP.innerText =
    'Data om din brug af websitet, hvilke annoncer, du modtager og evt. klikker på, geografisk placering, køn og alderssegment m.v. videregives til tredjeparter i det omfang disse oplysninger er kendt. Du kan se hvilke tredjeparter, der er tale om, i afsnittet om "Cookies" ovenfor. Oplysningerne anvendes til målretning af annoncering. Vi benytter herudover en række tredjeparter til opbevaring og behandling af data. Disse behandler udelukkende oplysninger på vores vegne og må ikke anvende dem til egne formål. Videregivelse af personoplysninger som navn og e-mail m.v. vil kun ske, hvis du giver samtykke til det. Vi anvender kun databehandlere i EU eller i lande, der kan give dine oplysninger en tilstrækkelig beskyttelse.';

  
  const pdPolicyH = Heading(
    "Persondatapolitik hos SgtPrepper",
    3,
    "subheading"
  );
  const pdPolicyP1 = Paragraph();
  pdPolicyP1.innerText =
    "Vi indhenter kun persondata i de tilfælde, hvor dette skulle være relevant for os, og vi vil kun indhente persondata, hvis det er relevant for din aktivitet hos SgtPrepper. Ved indsamling, behandling og anvendelse af dine persondata overholder vi altid alle relevante lovbestemmelser. Vi vil kun opbevare dine persondata, så længe vi enten er pålagt en juridisk forpligtelse hertil, eller så længe det er relevant for den hensigt, hvormed de blev indsamlet.";

  const pdPolicyH2 = Heading("Oplysninger vi indsamler", 4, "subheading-small");
  const pdPolicyP2 = Paragraph();
  pdPolicyP2.innerText =
    "Hvis du ønsker at købe og modtage et produkt eller en ydelse fra os, har vi brug for at indsamle visse persondata for at kunne gennemføre handlen og for at kunne tilbyde dig vores services. Vi kan bruge cookies til at holde styr på indholdet i din indkøbskurv, mens du bruger vores webshop. Vi kan indhente oplysninger som f.eks. navn, e-mailadresse, postadresse, leveringsadresse (hvis den varierer fra postadresse), telefonnummer og betalingsoplysninger.";

  const pdPolicyList = UL();
  pdPolicyList.append(LI());
  pdPolicyList.lastChild.textContent = "Besøger vores hjemmeside";
  pdPolicyList.append(LI());
  pdPolicyList.lastChild.textContent = "Gennemfører et køb af vores produkter";
  pdPolicyList.append(LI());
  pdPolicyList.lastChild.textContent = "Opretter en konto";
  pdPolicyList.append(LI());
  pdPolicyList.lastChild.textContent =
    "Sender os spørgsmål, reklamationer eller feedback";

  const pdDataControllerH = Heading(
    "Den dataansvarlige",
    4,
    "subheading-small"
  );
  const pdDataControllerP = Paragraph();
  pdDataControllerP.innerText =
    "Den dataansvarlige for indsamling, behandling og anvendelse af dine personoplysninger på http://127.0.0.1:5500/index.htm er SgtPrepper, Eksempelvej 1, 1234 By, cvr nr. 12345678";

  const pdPurposeH = Heading(
    "Behandlingsgrundlag og formål",
    4,
    "subheading-small"
  );
  const pdPurposeP = Paragraph();
  pdPurposeP.innerText =
    "Dine almindelige kontaktoplysninger som navn og adresse indhenter vi for at kunne levere det produkt eller den ydelse, som du har købt hos os. Din e-mailadresse indhenter vi for at kunne sende dig en ordrebekræftelse samt en leveringsbekræftelse. Når du betaler for dit produkt eller din ydelse indsamler vi dit navn, dine kortdata og IP-adresse. De oplysninger, der indsamles i forbindelse med betalingstransaktionen, anvendes og gemmes kun til betalingsafvikling og opfyldelse af den indgåede aftale. Ved gennemførelse af betalinger, vil nogle af dine data blive videregivet til betalingsudbydere med det formål at gennemføre betalingen.";

  const pdRetentionP = Paragraph();
  pdRetentionP.innerText =
    "Dine oplysninger (undtagen din e-mailadresse, hvis du har givet samtykke til behandling heraf med henblik på modtagelse af tilbud) vil blive slettet 5 år efter, at du har modtaget din vare eller ydelse.";

  const pdOthersH = Heading(
    "Andre modtagere af personoplysninger",
    4,
    "subheading-small"
  );
  const pdOthersP = Paragraph();
  pdOthersP.innerText =
    "Vi sælger ikke dine persondata til tredjemand, og vi overfører ikke dine persondata til tredjelande. Hvis du har bestilt levering, vil oplysningerne om dit navn, adresse, telefonnummer og e-mailadresse blive udleveret til vores fragtfirma med henblik på levering af dine indkøb. Vi har vores hjemmeside hos [ Hjemmesidens webhotel ] og betalingssystem gennem betalingsudbydere, som fungerer som vores databehandler. Alle persondata som du oplyser på vores hjemmeside vil blive opbevaret i [ Hjemmesidens webhotel ]s datacentre. Vi har indgået databehandleraftaler med vores databehandlere.";

  const pdRightsH = Heading("Dine rettigheder", 4, "subheading-small");
  const pdRightsP = Paragraph();
  pdRightsP.innerText =
    "Som den registrerede har du en række rettigheder, som vi til enhver tid skal sikre opfyldelse af. Du har ret til at anmode os om følgende: At få adgang til og få rettet/ændret dine persondata; At få slettet persondata. Du har derudover ret til at protestere over behandlingen af dine personlige data, og du har ret til at indgive klage til en databeskyttelsesmyndighed. Ønsker du ikke længere, at vi skal behandle dine personoplysninger, eller at vi skal begrænse behandlingen af dine personoplysninger, kan du også sende os en anmodning herom til vores e-mailadresse info@example.com.";

  const rightsH = Heading("Indsigt og klager", 3, "subheading");
  const rightsP1 = Paragraph();
  rightsP1.innerText =
    "Du har ret til at få oplyst, hvilke personoplysninger, vi behandler om dig i et almindeligt format (dataportabilitet). Du kan desuden til enhver tid gøre indsigelse mod, at oplysninger anvendes. Du kan også tilbagekalde dit samtykke til, at der bliver behandlet oplysninger om dig. Hvis de oplysninger, der behandles om dig, er forkerte har du ret til at de bliver rettet eller slettet.";
  const rightsP2 = Paragraph();
  rightsP2.innerText = "Henvendelse herom kan ske til:";
  const contactLink = LINK("mailto:info@example.com", "info@example.com", "");

  const publisherH = Heading("Udgiver", 3, "subheading");
  const publisherP = Paragraph();
  publisherP.innerText = "Websitet ejes og publiceres af:";
  const pubDetails = Paragraph();
  pubDetails.innerText =
    "SgtPrepper\nEksempelvej 1\nEksempelvej 1, 1234 By\nTelefon: +45 12 34 56 78";

  const pubEmailP = Paragraph();
  pubEmailP.append(contactLink);

  
  introH.id = "privacy-introduktion";
  cookiesH.id = "privacy-cookies";
  personH.id = "privacy-personoplysninger";
  pdPolicyH.id = "privacy-persondatapolitik";
  rightsH.id = "privacy-indsigt-klager";
  publisherH.id = "privacy-udgiver";

  
  const sections = [
    { id: introH.id, label: "Introduktion" },
    { id: cookiesH.id, label: "Cookies" },
    { id: personH.id, label: "Personoplysninger" },
    { id: pdPolicyH.id, label: "Persondatapolitik" },
    { id: rightsH.id, label: "Indsigt og klager" },
    { id: publisherH.id, label: "Udgiver" },
  ];

  sections.forEach((s) => {
    const li = document.createElement("li");
    li.className = "privacy-toc-item";
    const a = LINK("#", s.label, "privacy-toc-link");
    a.dataset.target = s.id;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(s.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        try {
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search + "#" + s.id
          );
        } catch (err) {}
  try {
          document
            .querySelectorAll(".privacy-toc-link")
            .forEach((el) => el.classList.remove("is-active"));
          a.classList.add("is-active");
        } catch (err) {}
      }
    });
    li.append(a);
    tocList.append(li);
  });
  toc.append(tocList);

  
  const tocProgress = document.createElement("div");
  tocProgress.className = "toc-progress";
  const tocProgressFill = document.createElement("div");
  tocProgressFill.className = "toc-progress__fill";
  tocProgress.append(tocProgressFill);
  toc.append(tocProgress);

  
  
  const sectionIds = sections.map((s) => s.id);

  const setActive = (id) => {
    try {
      document.querySelectorAll(".privacy-toc-link").forEach((el) => {
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

  
  const tocLive = document.createElement("div");
  tocLive.className = "toc-live";
  tocLive.setAttribute("aria-live", "polite");
  tocLive.setAttribute("aria-atomic", "true");
  tocLive.style.position = "absolute";
  tocLive.style.left = "-9999px";
  toc.append(tocLive);

  
  const _origSetActive = setActive;
  const idToLabel = Object.fromEntries(sections.map((s) => [s.id, s.label]));
  const setActiveWithAnnounce = (id) => {
    _origSetActive(id);
    try {
      const label = idToLabel[id] || "";
      if (label) tocLive.textContent = `Aktiv sektion: ${label}`;
    } catch (err) {}
  };

  

  
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

  
  window.addEventListener("hashchange", cleanupTOC);
  window.addEventListener("beforeunload", cleanupTOC);

  
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

  
  element.append(
    introH,
    introP,
    cookiesH,
    cookiesP1,
    cookiesP2,
    cookiesP3,
    personH,
    genH,
    genP,
    typesP,
    securityH,
    securityP,
    purposeH,
    purposeP,
    storageH,
    storageP,
    disclosureH,
    disclosureP,
    
    pdPolicyH,
    pdPolicyP1,
    pdPolicyH2,
    pdPolicyP2,
    pdPolicyList,
    pdDataControllerH,
    pdDataControllerP,
    pdPurposeH,
    pdPurposeP,
    pdRetentionP,
    pdOthersH,
    pdOthersP,
    pdRightsH,
    pdRightsP,
    rightsH,
    rightsP1,
    rightsP2,
    pubEmailP,
    publisherH,
    publisherP,
    pubDetails
  );
  return element;
};
