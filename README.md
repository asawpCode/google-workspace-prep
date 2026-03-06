# Google Workspace Admin Exam Prep

A browser-based quiz app I built to study for the **Professional Google Workspace Administrator** certification. No backend, no login, no install — just open the HTML file and go.

---

## Why I built this

The official Google practice material is limited and the question format can catch you off guard on exam day. I pulled together a bank of 141 real exam-style questions, built a clean quiz interface around them, and added both a timed exam simulation and per-topic practice mode so I could target weak spots.

---

## What's inside

**Full Exam Simulator** — pulls 50 random questions across all topics, no answer feedback during the session, scored at the end. Mirrors the real exam format. 80% to pass.

**Module Practice** — six topic areas you can drill independently:

| Module | Topics covered |
|--------|---------------|
| User & Resource Management | OUs, groups, domains, directory, migration |
| Security & Compliance | Context-Aware Access, DLP, SSO/SAML, investigation tool |
| Gmail & Email | Mail routing, spam, MX records, compliance rules |
| Google Vault | Legal holds, retention rules, matters, eDiscovery |
| Core Services | Drive, Calendar, Meet, Chat, AppSheet |
| Endpoint Management | Chrome policies, mobile device management |

**Question Bank** — browse all 141 questions with answers visible. Filterable by category and searchable by keyword. Good for a quick review before the exam.

---

## How to use it

Clone the repo and open `index.html` in a browser. That's it.

```bash
git clone https://github.com/asawpCode/google-workspace-prep.git
cd google-workspace-prep
open index.html
```

Or just visit the GitHub Pages link if it's enabled.

---

## Question coverage

141 questions across 13 categories. Each question includes the correct answer and a short explanation of why it's right.

The questions are stored in `questions.js` as a plain array — easy to add more or swap out if you want to extend the bank.

---

## Stack

Plain HTML, CSS, and vanilla JS. No frameworks, no dependencies, no build step.
