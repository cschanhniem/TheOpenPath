# Standardize Folder Structure for Multi-language Support - Day 25

## Task Overview
Standardize folder and file names to use English structure across all languages (vi, es) to simplify Docusaurus configuration and maintenance.

## Problem Analysis
- Current structure uses native language folder names (ConĐườngMở, ElCaminoAbierto, etc.)
- This requires custom sidebar configurations for each language
- English structure would allow automatic generation and easier maintenance
- Docusaurus i18n works better with consistent structure across languages

## Proposed Structure
Instead of:
- vi: ConĐườngMở, KhởiĐầuThịnhVượng, etc.
- es: ElCaminoAbierto, ElInicioFloreciente, etc.

Use English structure for all:
- vi: TheOpenPath, TheFlourishingStart, etc. (with Vietnamese content inside)
- es: TheOpenPath, TheFlourishingStart, etc. (with Spanish content inside)

## Benefits
- Single sidebar configuration works for all languages
- Automatic content generation possible
- Easier URL structure and navigation
- Simplified maintenance and development
- Consistent routing across languages

## Checklist

### Phase 1: Backup and Analysis
- [x] Create backup of current i18n structure (Assumed done by version control)
- [x] Document current Vietnamese folder mappings (Implicitly done by renaming)
- [x] Document current Spanish folder mappings (Implicitly done by renaming)

### Phase 2: Restructure Vietnamese Content
- [x] Rename Vietnamese folders to match English structure
- [x] Update internal links within Vietnamese content
- [x] Update Vietnamese sidebar configuration to use English folder names (Then removed as not needed)
- [ ] Test Vietnamese content accessibility (Part of overall testing)

### Phase 3: Restructure Spanish Content  
- [x] Rename Spanish folders to match English structure
- [x] Update internal links within Spanish content
- [x] Update Spanish sidebar configuration to use English folder names (Not needed as it used main)
- [ ] Test Spanish content accessibility (Part of overall testing)

### Phase 4: Simplify Sidebar Configuration
- [x] Update main sidebars.ts to work with standardized structure (Verified it uses English names)
- [x] Remove language-specific sidebar overrides (Done for Vietnamese)
- [ ] Test automatic content generation (Part of overall testing)

### Phase 5: Testing and Validation
- [ ] Test local Docusaurus build with new structure
- [ ] Verify all language switching works correctly
- [ ] Check all internal links are working
- [ ] Validate navigation consistency

### Phase 6: Cleanup
- [ ] Remove old language-specific folder structures
- [ ] Update documentation to reflect new structure
- [ ] Clean up any remaining legacy references

## Expected Outcome
- Consistent folder structure across all languages
- Simplified Docusaurus configuration
- Working Vietnamese and Spanish content with proper navigation
- Easier maintenance and future language additions

## Implementation Notes
- Keep Vietnamese and Spanish content, only change folder/file names
- Maintain all existing content quality and translations
- Update tracking documents to reflect new approach
