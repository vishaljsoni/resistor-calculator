# [SPRINT-1] Combat Core

## Labels
`area:client`

## Milestone
Sprint 1

## Description
Implement the core combat system for the One Piece–inspired game. This includes basic attack mechanics, hit detection, damage calculation, and health system.

## Acceptance Criteria
- [ ] Player can perform basic melee attacks (light and heavy)
- [ ] Hit detection system using collision or raycast
- [ ] Damage calculation based on attack type and character stats
- [ ] Health system with HP tracking for player and enemies
- [ ] Visual feedback for hits (damage numbers, hit effects)
- [ ] Basic enemy AI that can engage in combat
- [ ] Combat state machine (idle, attacking, hit-stun, dodging)
- [ ] Combo system foundation (at least 3-hit combo)

## Technical Notes
- Use Unity's physics system for hit detection
- Implement event-driven damage system for extensibility
- Create base classes for combatants (player, enemy)
- Consider using ScriptableObjects for attack configurations
- Ensure network compatibility for future multiplayer support

## Definition of Done
- [ ] Code complete and peer reviewed
- [ ] Unit tests written and passing
- [ ] Integration tests passing (if applicable)
- [ ] Documentation updated
- [ ] Deployed to dev environment
- [ ] QA sign-off received
- [ ] No critical or high-severity bugs
- [ ] Combat feels responsive with < 100ms input latency

## Sprint Information
- **Sprint**: Sprint 1 (Jan 16 - Jan 29, 2026)
- **Milestone**: Sprint 1
- **Assignee**: TBD
