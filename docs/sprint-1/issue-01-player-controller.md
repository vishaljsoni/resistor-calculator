# [SPRINT-1] Player Controller v0.1

## Labels
`area:client`

## Milestone
Sprint 1

## Description
Implement the basic player controller for the One Piece–inspired game MVP. This includes character movement, camera controls, and basic input handling for PC and Android platforms.

## Acceptance Criteria
- [ ] Player can move in 4 directions (WASD/Arrow keys on PC, virtual joystick on Android)
- [ ] Camera follows player smoothly with configurable offset
- [ ] Player animations for idle, walk, and run states
- [ ] Input system supports both keyboard/mouse and touch controls
- [ ] Movement speed is configurable via game settings
- [ ] Character collision with environment objects
- [ ] Controller works on both PC and Android build targets

## Technical Notes
- Use Unity's Input System package for cross-platform input handling
- Implement state machine for animation transitions
- Consider using Cinemachine for camera controls
- Ensure performance optimization for mobile (Android) target
- Follow singleton pattern for input manager if needed

## Definition of Done
- [ ] Code complete and peer reviewed
- [ ] Unit tests written and passing
- [ ] Integration tests passing (if applicable)
- [ ] Documentation updated
- [ ] Deployed to dev environment
- [ ] QA sign-off received
- [ ] No critical or high-severity bugs
- [ ] Performance meets mobile targets (60 FPS on mid-range Android devices)

## Sprint Information
- **Sprint**: Sprint 1 (Jan 16 - Jan 29, 2026)
- **Milestone**: Sprint 1
- **Assignee**: TBD
