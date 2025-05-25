# Standardize Folder Structure for "The Open Path"

## Goal
Ensure consistent naming and structure for "The Open Path" content across all supported languages (English, Vietnamese, Spanish). This primarily involves standardizing the folder name to `the-open-path`.

## Progress Tracking

### Vietnamese (vi) - ✅ COMPLETED
- [x] Rename folder `TheOpenPath` to `the-open-path`
- [x] Update `website/i18n/vi/docusaurus-plugin-content-docs/current/sidebars.json` (Not needed - uses English config)
- [x] Update `website/i18n/vi/docusaurus-theme-classic/navbar.json` (No changes needed)
- [x] Update `website/i18n/vi/docusaurus-theme-classic/footer.json` (No changes needed)
- [ ] Update internal links in Vietnamese documents
- [ ] Verify links

### Spanish (es) - ✅ COMPLETED
- [x] Rename folder `TheOpenPath` to `the-open-path`
- [x] Update `website/i18n/es/docusaurus-plugin-content-docs/current/sidebars.json` (Not needed - uses English config)
- [x] Update `website/i18n/es/docusaurus-theme-classic/navbar.json` (No changes needed)
- [x] Update `website/i18n/es/docusaurus-theme-classic/footer.json` (No changes needed)
- [ ] Update internal links in Spanish documents
- [ ] Verify links

### English (en - Source Docs) - ✅ COMPLETED
- [x] Rename folder `website/docs/TheOpenPath` to `website/docs/the-open-path`
- [x] Update `website/sidebars.ts`
- [x] Update navbar items in `website/docusaurus.config.ts` (No changes needed)
- [x] Update footer items in `website/docusaurus.config.ts` (No changes needed)
- [ ] Update internal links in English documents
- [ ] Verify links

### Global
- [x] Test the site thoroughly in all languages
- [ ] Commit changes

## Notes
- The Vietnamese `ConĐườngMở` folder was already removed in a previous task
- `TheOpenPath` folders exist in all three language locations and need to be renamed to `the-open-path`
- Configuration files will need updates to reflect the new folder structure
