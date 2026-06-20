# Node Journey

> From WordPress to Node.js — a structured path from senior WordPress developer to production-ready Node.js backend developer.

## About

10 years of professional PHP/WordPress development, now expanding into Node.js. Arriving with existing experience in REST API design, JavaScript/TypeScript, Vue.js (Pinia/Vuex), MySQL, Nginx, and Git — this isn't a from-scratch start, it's a stack expansion. Goal: interview-ready for junior+/middle Node.js backend roles within a 2-3 month window, studying ~5-10 hours a week alongside full-time work.

This repo documents that process: working code from each topic, plus a running checklist of what's actually been covered.

## Progress

**Currently: Week 2 of 10 complete.**

*(update this line as weeks close out)*

## Tech stack covered

Node.js · Express · PostgreSQL · Prisma · JWT · Jest · Supertest · TypeScript · NestJS · Docker

## Checklist

### Week 1 — Node.js Runtime & Modules
- [x] Node.js architecture (V8 + libuv)
- [x] CommonJS vs ES Modules (interop, `__dirname`/`__filename`, `"type": "module"`)
- [x] npm fundamentals: semver, lock files
- [x] Built-in modules: `fs`, `path`, `process`, `os`
- [x] Practical: CLI that recursively combines `.md` files (CJS + ESM variants)

### Week 2 — Async JavaScript & Event Loop
- [x] Event loop: call stack, Web APIs/libuv, microtask & macrotask queues
- [x] `process.nextTick` priority over Promise microtasks
- [x] Callback → Promise → async/await evolution
- [x] Practical: predict execution order across 10 snippets
- [x] Practical: refactor file combiner to use `Promise.all`
- [x] Practical: implement `myPromiseAll` from scratch

### Week 3 — Express REST API
- [ ] Routing & middleware
- [ ] Request/response lifecycle
- [ ] Error-handling middleware
- [ ] Practical: build REST API endpoints

### Week 4 — PostgreSQL & Prisma
- [ ] Relational data modeling, SQL basics
- [ ] Prisma schema & migrations
- [ ] CRUD via Prisma Client
- [ ] Practical: connect a database to the Express API

### Week 5 — Authentication & Security
- [ ] JWT-based authentication
- [ ] Password hashing (bcrypt)
- [ ] Auth middleware
- [ ] Security basics: CORS, helmet, rate limiting
- [ ] Practical: auth endpoints

### Week 6 — Testing (Jest & Supertest)
- [ ] Unit tests with Jest
- [ ] Integration tests with Supertest
- [ ] Mocking
- [ ] Practical: test suite for the API from earlier weeks

### Week 7 — TypeScript & NestJS Intro
- [ ] TypeScript in a Node project
- [ ] NestJS fundamentals: modules, controllers, providers, dependency injection
- [ ] Practical: small API rebuilt in NestJS

### Week 8 — Advanced Node (Streams & Worker Threads)
- [ ] Streams: Readable / Writable / Transform
- [ ] Worker threads
- [ ] Practical: process a large file via streams

### Weeks 9-10 — Docker, Deployment & System Design
- [ ] Docker: Dockerfile, docker-compose
- [ ] CI/CD basics (GitHub Actions)
- [ ] System design fundamentals for backend interviews
- [ ] Capstone project tying the full stack together
- [ ] Mock interviews

## Background

Senior WordPress Developer, 10 years commercial experience — custom plugins, themes, REST APIs, performance optimization, headless WordPress architectures. Core stack: PHP, WordPress, JavaScript, TypeScript, Vue.js. This repo is the bridge into Node.js backend development.

---

*Checkboxes reflect actual completion, not the original plan — updated as I go.*
