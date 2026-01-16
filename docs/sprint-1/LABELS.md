# GitHub Labels Configuration

This document describes the labels to be created for the One Piece–inspired game MVP project.

## How to Create Labels

Labels can be created via the GitHub web interface or using the GitHub CLI:

### Via GitHub Web Interface
1. Navigate to repository Settings
2. Click on "Labels" in the left sidebar
3. Click "New label"
4. Enter the label name, description, and color
5. Click "Create label"

### Via GitHub CLI
```bash
gh label create "area:client" --description "Client-side game code and features" --color "0366d6"
gh label create "area:backend" --description "Backend services, APIs, and infrastructure" --color "d73a4a"
gh label create "area:content" --description "Game content, assets, and level design" --color "0e8a16"
gh label create "infra" --description "Infrastructure, CI/CD, and development tools" --color "fbca04"
```

## Label Definitions

### Area Labels

| Label | Color | Description | Usage |
|-------|-------|-------------|-------|
| `area:client` | Blue (#0366d6) | Client-side game code and features | Use for Unity game code, player controllers, UI, game mechanics |
| `area:backend` | Red (#d73a4a) | Backend services, APIs, and infrastructure | Use for server APIs, database, authentication, data persistence |
| `area:content` | Green (#0e8a16) | Game content, assets, and level design | Use for level design, 3D models, textures, game content |
| `infra` | Yellow (#fbca04) | Infrastructure, CI/CD, and development tools | Use for build systems, CI/CD, monitoring, tooling |

## Additional Recommended Labels

These can be added as the project evolves:

| Label | Color | Description |
|-------|-------|-------------|
| `priority:high` | Red (#d73a4a) | High priority issues |
| `priority:medium` | Orange (#e99695) | Medium priority issues |
| `priority:low` | Yellow (#fbca04) | Low priority issues |
| `bug` | Red (#d73a4a) | Something isn't working |
| `enhancement` | Blue (#a2eeef) | New feature or request |
| `documentation` | Gray (#0075ca) | Improvements or additions to documentation |
| `good first issue` | Purple (#7057ff) | Good for newcomers |
| `blocked` | Red (#b60205) | Blocked by dependencies |
