# AI Prompt for Completing English to Vietnamese Translation

## Context
You are working on "The Open Path - Global Flourishing Initiative" project, which needs complete English to Vietnamese translation. A detailed plan exists in `changelog/tracking/25-translate-en-to-vi.md` with comprehensive checklists.

## Your Task
Complete the full English to Vietnamese translation following the established plan. Some initial translations have been completed (book.json, README.md, SUMMARY.md, and 00_TheOpenPath/README.md).

## Project Structure
```
/Users/james/the-open-path/
├── en/                           # English source content (GitBook style)
├── vi/                           # Vietnamese target content (partially complete)
├── website/docs/                 # English Docusaurus content
├── website/i18n/vi/             # Vietnamese Docusaurus translations (incomplete)
└── changelog/tracking/25-translate-en-to-vi.md  # Your detailed plan
```

## Translation Guidelines

### 1. Quality Standards
- **Accuracy**: Maintain technical precision while making content accessible in Vietnamese
- **Cultural Adaptation**: Use Vietnamese Buddhist/mindfulness terminology where appropriate
- **Consistency**: Use consistent translations for recurring terms throughout
- **Tone**: Maintain the contemplative, educational, and inclusive tone of the original

### 2. Key Translation Principles
- Translate technical terms accurately while keeping them understandable
- Preserve all Markdown formatting, links, and structure
- Maintain mermaid diagrams exactly as they are (don't translate diagram syntax)
- Keep frontmatter structure but translate content fields
- Preserve file paths and directory structures in links

### 3. Important Vietnamese Terms to Use Consistently
- The Open Path → Con Đường Mở
- Global Flourishing → Thịnh Vượng Toàn Cầu
- Mindfulness/Awareness → Chánh niệm
- Compassion → Lòng từ bi / Từ bi
- Wisdom → Trí tuệ
- Meditation → Thiền tập
- Well-being → Sự an lạc
- Flourishing → Thịnh vượng
- Interconnection → Sự tương liên
- Resilience → Khả năng phục hồi

## Execution Instructions

### Phase 1: Complete GitBook Content Translation (`en/` → `vi/`)

**Priority Order:**
1. First complete all missing files in `00_ConĐườngMở/` (Practices/, Principles/, Resources/)
2. Then proceed with other modules in order: 01, 02, 03, 04, 05

**For each file:**
```
1. Read the English source file
2. Translate content maintaining all formatting
3. Create Vietnamese file in corresponding vi/ location
4. Update the tracking checklist
```

**Command Pattern:**
```
read_file('en/path/to/file.md')
# Translate content
write_to_file('vi/vietnamese_path/to/file.md', translated_content)
# Update tracking checklist
```

### Phase 2: Complete Docusaurus Website Translation

**Priority Order:**
1. Main documentation files (index.md, CODE_OF_CONDUCT.md, etc.)
2. Module-specific content directories
3. Theme components (navbar.json, footer.json)
4. Sidebar configuration

**For each file:**
```
1. Read source: website/docs/path/file.md
2. Translate maintaining Docusaurus frontmatter
3. Write to: website/i18n/vi/docusaurus-plugin-content-docs/current/path/file.md
```

### Phase 3: Configuration & UI Elements

1. **Update Docusaurus config** for Vietnamese locale
2. **Translate theme components** (navbar, footer)
3. **Update sidebar configuration** with Vietnamese labels
4. **Handle React components** with hardcoded English text

### Phase 4: Verification & Testing

1. **Build test**: `cd website && pnpm build --locale vi`
2. **Serve test**: `cd website && pnpm start --locale vi`
3. **Manual verification**: Check all pages, links, navigation
4. **Update documentation**: changelog, commit message preparation

## Specific Technical Instructions

### Handling Markdown Files
- Preserve all `#` headers, `##` subheaders exactly
- Keep all `[link text](path)` structures intact
- Translate link text but preserve paths
- Maintain all `**bold**` and `*italic*` formatting
- Keep code blocks ```language exactly as is
- Preserve all HTML tags and attributes

### Handling Frontmatter
```yaml
# Translate these fields:
title: "Vietnamese Translation"
description: "Vietnamese description"
sidebar_label: "Vietnamese Label"

# Keep these unchanged:
id: same-id
slug: /same-slug
```

### Handling Mermaid Diagrams
- Keep all mermaid syntax exactly the same
- Only translate text content within diagram nodes
- Preserve all arrows, styling, and structure

### File Path Mapping Examples
```
en/00_TheOpenPath/Practices/01_FoundationalMeditations.md
→ vi/00_ConĐườngMở/Practices/01_FoundationalMeditations.md

website/docs/CODE_OF_CONDUCT.md
→ website/i18n/vi/docusaurus-plugin-content-docs/current/CODE_OF_CONDUCT.md
```

## Error Handling
- If you encounter files that don't exist, create the directory structure first
- If translation seems incomplete, mark it clearly and continue
- Always update the tracking checklist to show progress
- Note any issues or decisions in the tracking file

## Success Criteria
- [ ] All English content files have Vietnamese equivalents
- [ ] Vietnamese Docusaurus site builds without errors
- [ ] All navigation and links work in Vietnamese version
- [ ] Tracking checklist shows 100% completion
- [ ] Commit message prepared for final submission

## Final Deliverable
When complete, prepare a summary showing:
1. Total files translated
2. Any issues encountered
3. Testing results
4. Ready-to-commit status

Begin with Phase 1, systematically work through the detailed checklist in `changelog/tracking/25-translate-en-to-vi.md`, and update progress as you go.
