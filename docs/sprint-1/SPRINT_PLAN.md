# Sprint 1 Planning Document
## One Piece–Inspired Game MVP

### Sprint Overview

**Sprint Number**: 1  
**Sprint Goal**: Deliver a playable MVP with core mechanics, first Devil Fruit power, and hub island prototype  
**Start Date**: January 16, 2026  
**End Date**: January 29, 2026  
**Duration**: 2 weeks (10 working days)

---

## Sprint Objectives

The primary goal of Sprint 1 is to establish the foundational gameplay systems and infrastructure necessary for a minimum viable product (MVP) of the One Piece–inspired game. By the end of this sprint, we should have:

1. **Playable Core Loop**: Basic player movement, combat, and power system
2. **Technical Foundation**: Backend services, CI/CD, and build pipeline
3. **Content Prototype**: Graybox hub island for initial playtesting
4. **Quality Standards**: Definition of Done established for all future work

---

## Sprint Scope

### Client-Side Features (area:client)

#### 1. Player Controller v0.1
**Priority**: High  
**Estimated Effort**: 3-5 days  
**Dependencies**: None  

Core functionality:
- 4-directional movement (WASD/virtual joystick)
- Camera following system
- Animation state machine (idle, walk, run)
- Cross-platform input (PC keyboard/mouse, Android touch)
- Collision detection

**Success Metrics**:
- Responsive controls with <100ms input latency
- 60 FPS on PC, 30+ FPS on mid-range Android
- No jitter in camera follow

#### 2. Combat Core
**Priority**: High  
**Estimated Effort**: 5-7 days  
**Dependencies**: Player Controller

Core functionality:
- Melee attack system (light/heavy attacks)
- Hit detection and damage calculation
- Health system for player and enemies
- Basic enemy AI
- Combat state machine
- 3-hit combo foundation

**Success Metrics**:
- Combat feels responsive (<100ms hit detection)
- Clear visual feedback on hits
- Enemy AI can engage and attack player

#### 3. Power Framework + Fruit #1
**Priority**: High  
**Estimated Effort**: 5-7 days  
**Dependencies**: Combat Core

Core functionality:
- Extensible power system architecture
- Cooldown and resource management
- First Devil Fruit implementation (e.g., Gomu Gomu no Mi)
- At least one signature ability
- VFX for power activation
- UI for cooldown indicators

**Success Metrics**:
- Architecture supports multiple Devil Fruits
- Powers integrate seamlessly with combat
- Abilities feel impactful and fun to use

---

### Content (area:content)

#### 4. Hub Island Graybox
**Priority**: Medium  
**Estimated Effort**: 3-4 days  
**Dependencies**: Player Controller

Core functionality:
- Graybox level layout with 3 zones
- Navigable terrain with collision
- Spawn points and POI markers
- NPC placement markers
- Transition to gameplay area

**Success Metrics**:
- Level loads without errors
- Scale feels appropriate for movement speed
- Playtest feedback is positive on flow

---

### Backend (area:backend)

#### 5. Backend Scaffolding
**Priority**: High  
**Estimated Effort**: 5-7 days  
**Dependencies**: None

Core functionality:
- Framework setup (Node.js/Express or similar)
- Database configuration
- JWT authentication system
- Player profile CRUD endpoints
- Inventory schema and endpoints
- API documentation (Swagger)

**Success Metrics**:
- All endpoints documented and tested
- Authentication secure (no vulnerabilities)
- Response times <200ms for CRUD operations

#### 6. Location Unlock Prototype
**Priority**: Medium  
**Estimated Effort**: 3-5 days  
**Dependencies**: Backend Scaffolding, Hub Island

Core functionality:
- Client-side unlock UI
- Server-side unlock state tracking
- Unlock condition validation (level, quest)
- World map integration
- Save/load functionality

**Success Metrics**:
- Server is authoritative for unlocks
- No client-server desync issues
- UI clearly shows unlock requirements

---

### Infrastructure (infra)

#### 7. CI/Crash Logging/Feature Flags
**Priority**: High  
**Estimated Effort**: 4-6 days  
**Dependencies**: None

Core functionality:
- GitHub Actions CI/CD pipeline
- Automated builds and tests
- Crash reporting (Sentry or similar)
- Feature flag system
- Monitoring and alerting

**Success Metrics**:
- CI runs on every PR/merge
- Crashes automatically logged with stack traces
- Feature flags can be toggled without deployment

#### 8. Playable Build Targets
**Priority**: High  
**Estimated Effort**: 3-5 days  
**Dependencies**: Player Controller, Combat Core

Core functionality:
- PC build (Windows required, Mac/Linux optional)
- Android build (API 30+, ARM64)
- Build automation scripts
- Size optimization (<150MB Android)
- Distribution setup

**Success Metrics**:
- Builds complete without errors
- Performance targets met on both platforms
- Builds can be distributed to testers

#### 9. Definition of Done Checklist
**Priority**: High  
**Estimated Effort**: 1-2 days  
**Dependencies**: None

Core functionality:
- DoD document covering quality standards
- PR template with DoD checklist
- Automated checks (linting, coverage)
- Team sign-off on criteria

**Success Metrics**:
- All team members understand and agree to DoD
- DoD integrated into PR workflow
- Quality standards are measurable

---

## Team Capacity

**Team Size**: TBD (assign during sprint planning)  
**Available Days**: 10 working days  

**Roles Needed**:
- Frontend/Game Developers (Unity, C#)
- Backend Developers (Node.js/similar)
- Content Designer (Level design)
- DevOps Engineer (CI/CD, infrastructure)

---

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Cross-platform input issues | High | Medium | Early testing on both PC and Android |
| Backend authentication complexity | Medium | Medium | Use proven libraries (Passport.js, etc.) |
| Android performance issues | High | Medium | Profile early, optimize assets |
| Scope creep on combat system | Medium | High | Stick to basic combo, defer advanced features |
| Feature flag integration delays | Low | Low | Use existing service (LaunchDarkly) |

---

## Dependencies and Blockers

**External Dependencies**:
- Unity version agreement (recommend Unity 2021.3 LTS or newer)
- Backend framework choice (recommend Node.js + Express)
- Database selection (recommend PostgreSQL or MongoDB)
- CI/CD platform (GitHub Actions - already available)
- Crash reporting service selection

**Team Dependencies**:
- Player Controller must be completed before Combat Core
- Backend Scaffolding before Location Unlock
- Both client and backend needed for Location Unlock integration

---

## Sprint Ceremonies

### Sprint Planning (Day 1)
- Review and refine all 9 work items
- Assign issues to team members
- Estimate effort and identify risks
- Commit to sprint scope

### Daily Standup (Every Day)
- What did you do yesterday?
- What will you do today?
- Any blockers or issues?
- Review project board status

### Sprint Review (Day 10)
- Demo completed features
- Playthrough of integrated build
- Gather stakeholder feedback
- Accept/reject work items

### Sprint Retrospective (Day 10)
- What went well?
- What could be improved?
- Action items for Sprint 2

---

## Definition of Done

For Sprint 1, work is considered "Done" when:

1. **Code Complete**
   - All code written and committed
   - Follows coding standards
   - Passes linting checks

2. **Tested**
   - Unit tests written and passing
   - Integration tests passing (where applicable)
   - Manual testing completed
   - No critical or high-severity bugs

3. **Reviewed**
   - Code review completed by peer
   - All review comments addressed
   - Approved by at least one reviewer

4. **Documented**
   - Code comments added where necessary
   - API documentation updated
   - User-facing documentation updated
   - README updated if needed

5. **Deployed**
   - Deployed to dev environment
   - Smoke tests passed
   - No deployment errors

6. **Accepted**
   - QA sign-off received
   - Product Owner approval
   - Meets acceptance criteria

---

## Success Criteria for Sprint 1

Sprint 1 is successful if:

1. ✅ All 9 work items are completed and meet DoD
2. ✅ MVP is playable on both PC and Android
3. ✅ Core gameplay loop is functional and fun
4. ✅ Backend services are secure and performant
5. ✅ CI/CD pipeline is operational
6. ✅ No critical bugs remain open
7. ✅ Team agrees DoD is achievable and reasonable

---

## Next Steps (Sprint 2 Preview)

Items likely to be tackled in Sprint 2:
- Additional Devil Fruits (2-3 more)
- Quest system foundation
- NPC dialogue system
- Player progression (XP/leveling)
- Enhanced combat (blocking, dodging)
- Additional locations/islands
- Multiplayer foundation (networking)

---

## References and Resources

- [Sprint 1 Issues](./README.md)
- [Project Board Guide](./PROJECT_BOARD.md)
- [Labels Configuration](./LABELS.md)
- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-01-16 | Initial Sprint 1 plan created | Project Team |
