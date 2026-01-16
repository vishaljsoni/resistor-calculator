# [SPRINT-1] Playable Build Target PC + Android

## Labels
`infra`

## Milestone
Sprint 1

## Description
Configure and optimize build settings for both PC (Windows/Mac/Linux) and Android platforms. Ensure builds are performant, properly configured, and can be distributed to testers.

## Acceptance Criteria
- [ ] PC build configuration
  - [ ] Windows 64-bit build
  - [ ] macOS build (optional for MVP)
  - [ ] Linux build (optional for MVP)
  - [ ] Proper resolution and graphics settings
- [ ] Android build configuration
  - [ ] Target Android 11+ (API level 30+)
  - [ ] ARM64 architecture support
  - [ ] Proper permissions configured
  - [ ] App icon and splash screen
  - [ ] Keystore for signing builds
- [ ] Build scripts for automated builds
- [ ] Build size optimization
  - [ ] Asset compression enabled
  - [ ] Code stripping configured
  - [ ] Target build size < 150MB for Android
- [ ] Performance profiling on target devices
  - [ ] 60 FPS on mid-range PC
  - [ ] 30+ FPS on mid-range Android device
- [ ] Distribution method configured (TestFlight, Google Play Internal Testing, or similar)

## Technical Notes
- Use Unity's build pipeline and build automation
- Configure IL2CPP for Android (better performance)
- Set appropriate texture compression for mobile
- Test on actual Android devices, not just emulator
- Consider separate build configurations for dev/staging/prod
- Document minimum hardware requirements

## Definition of Done
- [ ] Code complete and peer reviewed
- [ ] Unit tests written and passing (N/A for build configs)
- [ ] Integration tests passing (builds complete without errors)
- [ ] Documentation updated (build instructions, requirements)
- [ ] Deployed to dev environment
- [ ] QA sign-off received (builds tested on target platforms)
- [ ] No critical or high-severity bugs
- [ ] Performance benchmarks documented

## Sprint Information
- **Sprint**: Sprint 1 (Jan 16 - Jan 29, 2026)
- **Milestone**: Sprint 1
- **Assignee**: TBD
