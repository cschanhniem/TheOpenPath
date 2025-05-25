# Plan for Full English to Vietnamese Translation

## I. Project Setup & Analysis
- [x] **Identify all English source files:**
    - [x] Markdown content files in `en/` directory (recursive).
    - [x] Markdown content files in `website/docs/` directory (recursive).
    - [x] Docusaurus configuration files that might contain English text (e.g., `website/docusaurus.config.ts`, `website/sidebars.ts`).
    - [x] Any other English text in UI components or static assets if applicable (e.g., `website/src/`).
- [x] **Analyze existing Vietnamese structure:**
    - [x] Review `vi/` directory structure.
    - [x] Review `website/i18n/vi/` directory structure.
    - [x] Ensure the Vietnamese structure mirrors the English structure for consistency.

## II. Content Translation - GitBook Style Content (`en/` -> `vi/`)
- [ ] **Iterate through each English file/folder in `en/`:**
    - For each file `en/path/to/file.md`:
        - [ ] Create corresponding directory `vi/path/to/` if it doesn't exist.
        - [ ] Create `vi/path/to/file.md`.
        - [ ] Translate content from `en/path/to/file.md` to Vietnamese and write to `vi/path/to/file.md`.
        - [ ] Pay special attention to frontmatter/metadata if present.
    - [x] Translate `en/book.json` to `vi/book.json`.
    - [x] Translate `en/README.md` to `vi/README.md`.
    - [x] Translate `en/SUMMARY.md` to `vi/SUMMARY.md`.
- [ ] **Specific Directory Translations (Example for `en/00_TheOpenPath/`):**
    - [x] Translate `en/00_TheOpenPath/README.md` to `vi/00_ConĐườngMở/README.md`.
    - [x] Translate files in `en/00_TheOpenPath/Practices/` to `vi/00_ConĐườngMở/Practices/`.
        - [x] `01_FoundationalMeditations.md` (already completed)
        - [x] `02_EmotionalRegulationExercises.md` (already completed)
        - [x] `03_CompassionMeditations.md` (completed)
        - [x] `04_WalkingMovementMeditations.md` (completed)
        - [x] `05_DailyLifeIntegration.md` (completed)
    - [ ] Translate files in `en/00_TheOpenPath/Principles/` to `vi/00_ConĐườngMở/Principles/`.
        - [x] `01_UnderstandingTheMind.md` (already completed)
        - [x] `02_CultivatingAwareness.md` (already completed)
        - [x] `03_DevelopingCompassion.md` (completed)
        - [x] `04_UnderstandingInterconnection.md` (completed)
        - [ ] `05_CultivatingWisdom.md`
        - [ ] `06_BuildingResilience.md`
        - [ ] `07_UnderstandingSuffering.md`
        - [ ] `08_EthicalLiving.md`
    - [x] Translate files in `en/00_TheOpenPath/Resources/` to `vi/00_ConĐườngMở/Resources/`.
        - [x] `README.md` (completed)
        - [x] `01_ScientificResearch.md` (completed)
- [ ] **Repeat for all modules:**
    - [ ] `en/01_TheFlourishingStart/` -> `vi/01_KhởiĐầuThịnhVượng/`
    - [ ] `en/02_EcologicalIntegrity/` -> `vi/02_TínhToànVẹnSinhThái/`
    - [ ] `en/03_UniversalBasicNeeds/` -> `vi/03_NhuCầuCơBảnToànCầu/`
    - [ ] `en/04_GlobalHealth_DiseaseEradication/` -> `vi/04_SứcKhỏeToànCầu_XóaBỏDịchBệnh/`
    - [ ] `en/05_GlobalPeace_Cooperation/` -> `vi/05_HòaBìnhToànCầu_HợpTác/`

## III. Content Translation - Docusaurus Website (`website/docs/` -> `website/i18n/vi/docusaurus-plugin-content-docs/current/`)
- [ ] **Iterate through each English file/folder in `website/docs/`:**
    - For each file `website/docs/path/to/doc.md`:
        - [ ] Create corresponding directory `website/i18n/vi/docusaurus-plugin-content-docs/current/path/to/` if it doesn't exist.
        - [ ] Create `website/i18n/vi/docusaurus-plugin-content-docs/current/path/to/doc.md`.
        - [ ] Translate content from `website/docs/path/to/doc.md` to Vietnamese and write to the new file.
        - [ ] Ensure Docusaurus-specific frontmatter (id, title, sidebar_label, etc.) is correctly translated or maintained.
- [ ] **Specific File Translations (Examples):**
    - [ ] `website/docs/CODE_OF_CONDUCT.md` -> `website/i18n/vi/docusaurus-plugin-content-docs/current/CODE_OF_CONDUCT.md`
    - [ ] `website/docs/Community_Hub.md` -> `website/i18n/vi/docusaurus-plugin-content-docs/current/Community_Hub.md`
    - [ ] ... and so on for all files in `website/docs/`.
- [ ] **Translate Docusaurus Theme Components:**
    - [ ] Review and translate `website/i18n/vi/docusaurus-theme-classic/navbar.json` (if not already fully translated).
    - [ ] Review and translate `website/i18n/vi/docusaurus-theme-classic/footer.json` (if not already fully translated).
    - [ ] Translate any other theme components if they exist and contain text.
- [ ] **Translate Docusaurus Sidebar Configuration:**
    - [ ] Ensure `website/i18n/vi/docusaurus-plugin-content-docs/current/sidebars.json` accurately reflects the translated structure and labels. This might involve copying the structure from `website/sidebars.ts` and translating labels.

## IV. Configuration & UI Translation for Docusaurus
- [ ] **`website/docusaurus.config.ts`:**
    - [ ] Identify any hardcoded English strings in `themeConfig` (e.g., `navbar.title`, `footer.copyright`, announcement bar text).
    - [ ] For locale-specific configurations, ensure the `vi` locale settings are complete.
- [ ] **`website/src/components/` & `website/src/pages/`:**
    - [ ] Scan for any hardcoded English text in custom React components or pages.
    - [ ] Implement Docusaurus i18n utilities (e.g., `<Translate>`, `useDocusaurusContext`) for these texts.
    - [ ] Add corresponding translations to `website/i18n/vi/code.json`.

## V. Verification & Testing
- [ ] **Build the Docusaurus site for Vietnamese:**
    - [ ] Run `cd website && pnpm build --locale vi`.
    - [ ] Check for any build errors.
- [ ] **Serve the Docusaurus site locally for Vietnamese:**
    - [ ] Run `cd website && pnpm start --locale vi`.
    - [ ] Navigate through the Vietnamese version of the site.
    - [ ] Verify all pages are translated.
    - [ ] Check for broken links.
    - [ ] Ensure navigation (navbar, sidebar, footer) is translated and functional.
    - [ ] Verify layout and styling are correct.
- [ ] **Linting (if applicable):**
    - [ ] Run any linting tools to check for formatting or code issues in the new Vietnamese files.

## VI. Documentation & Finalization
- [ ] **Update `LANGS.md`** or any other documentation that lists available languages, if necessary.
- [ ] **Create/Update `README.md` files in `vi/` subfolders** as per user's custom instructions.
    - [ ] `vi/README.md`
    - [ ] `vi/00_ConĐườngMở/README.md`
    - [ ] ... and for other modules.
- [ ] **Create/Update `README.md` for Docusaurus Vietnamese content** if applicable.
- [ ] **Update `changelog/2025/05-week-4.md`** with a summary of the translation effort.
- [ ] **Prepare Git commit message:** `git commit -m "feat: complete Vietnamese translation for GitBook and Docusaurus content"`
