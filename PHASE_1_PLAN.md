# Phase 1: Git & GitHub Fundamentals - Implementation Plan
## Week 1-2 Daily Breakdown

**Goal:** Master version control, Git workflows, and GitHub collaboration basics

---

## Week 1: Git Foundations & Local Workflow

### Day 1-2: Setup & Git Basics
**Time commitment:** 2-3 hours

#### Tasks:
1. **GitHub Account Setup**
   - [ ] Create SSH keys (if not done): `ssh-keygen -t ed25519 -C "your-email@example.com"`
   - [ ] Add SSH key to GitHub: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
   - [ ] Test SSH connection: `ssh -T git@github.com`
   - [ ] Configure Git globally:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your-email@example.com"
     git config --global core.editor "vim" # or your preferred editor
     ```

2. **Learn Git Basics** (via Learn Git Branching or Pro Git Ch1-3)
   - [ ] Understand: repository, commit, working directory, staging area
   - [ ] Learn commands: `init`, `add`, `commit`, `log`, `status`
   - [ ] Practice: Create 5 local commits with meaningful messages

3. **First GitHub Repo**
   - [ ] Create a repository on GitHub (e.g., `git-practice`)
   - [ ] Clone it locally: `git clone git@github.com:yourusername/git-practice.git`
   - [ ] Make 3 commits and push: `git push origin main`

#### Resources:
- [Pro Git Ch1-3](https://git-scm.com/book/en/v2)
- [GitHub SSH Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Learn Git Branching (Commit level 1-3)](https://learngitbranching.js.org/)

---

### Day 3-4: Branching & Merging
**Time commitment:** 2-3 hours

#### Tasks:
1. **Learn Branching Concepts**
   - [ ] Understand: branches as pointers, HEAD, default branch
   - [ ] Commands: `branch`, `checkout`, `switch`, `merge`
   - [ ] Practice on Learn Git Branching: Complete levels 1-6 (Commit to Merge)

2. **Local Branch Practice**
   - [ ] Create a new branch: `git checkout -b feature/my-feature`
   - [ ] Make 3 commits on the branch
   - [ ] Switch back to main: `git checkout main`
   - [ ] Merge the branch: `git merge feature/my-feature`
   - [ ] Delete the branch: `git branch -d feature/my-feature`
   - [ ] Repeat 3 times with different features

3. **Push & Pull Practice**
   - [ ] Create a branch on GitHub from main
   - [ ] Clone repo, checkout the branch, make changes, push
   - [ ] Observe branch on GitHub

#### Resources:
- [Learn Git Branching (Levels 1-6)](https://learngitbranching.js.org/)
- [Pro Git Ch3: Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

---

### Day 5-7: .gitignore & Push/Pull Workflow
**Time commitment:** 2-3 hours

#### Tasks:
1. **Understand .gitignore**
   - [ ] Create a `.gitignore` file in your repo
   - [ ] Add common patterns:
     ```
     node_modules/
     .env
     dist/
     .DS_Store
     *.log
     ```
   - [ ] Test: Create files matching patterns, verify they don't appear in `git status`
   - [ ] Commit `.gitignore`

2. **Pull Request Workflow (Local)**
   - [ ] On a branch, make changes to a file
   - [ ] Stage & commit: `git add .` → `git commit -m "message"`
   - [ ] Push to GitHub: `git push origin branch-name`
   - [ ] Open a PR on GitHub
   - [ ] Review your own PR, merge on GitHub
   - [ ] Pull changes locally: `git pull origin main`

3. **Merge Conflict Practice**
   - [ ] Create two branches from main
   - [ ] Edit the **same line** in the same file on both branches
   - [ ] Merge first branch (succeeds)
   - [ ] Merge second branch (creates conflict)
   - [ ] Resolve manually, test, commit
   - [ ] Push and verify on GitHub

#### Resources:
- [gitignore Templates](https://github.com/github/gitignore)
- [Resolving Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)

---

## Week 2: Collaboration & Advanced Basics

### Day 8-9: Commit Messages & Code Review
**Time commitment:** 2-3 hours

#### Tasks:
1. **Write Good Commit Messages**
   - [ ] Learn the 7 Rules (Pro Git or conventional commits)
   - [ ] Rewrite 5 old commits with better messages (practice only, don't push)
   - [ ] Example good message:
     ```
     Add user authentication to login page
     
     - Implement JWT token generation
     - Add password hashing with bcrypt
     - Store tokens in secure cookies
     ```
   - [ ] Practice: Make 10 commits with clear, descriptive messages in your practice repo

2. **Learn Code Review Process**
   - [ ] Read: [GitHub PR Review Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests)
   - [ ] Create a PR with intentional "issues":
     - Typo in a comment
     - Unused variable
     - Missing whitespace
   - [ ] Request your own review (invite a friend or use your secondary account)
   - [ ] Practice leaving constructive feedback

#### Resources:
- [Pro Git Ch7: Commit Messages](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

### Day 10-11: Rebasing & Interactive Staging
**Time commitment:** 2-3 hours

#### Tasks:
1. **Learn Rebase Basics**
   - [ ] Understand: rebase vs merge, linear history
   - [ ] Learn on Learn Git Branching levels 7-8
   - [ ] Local practice: 
     ```bash
     git checkout feature-branch
     git rebase main
     # Resolve any conflicts
     git push -f origin feature-branch  # Force push after rebase
     ```
   - [ ] Compare: create same branch, merge vs rebase, compare history

2. **Interactive Staging & Commits**
   - [ ] Use `git add -p` to stage parts of a file:
     ```bash
     git add -p
     # Practice selecting hunks with y/n/s
     ```
   - [ ] Use `git commit --amend` to fix last commit
   - [ ] Create a messy commit history, clean it up with `git rebase -i main`

#### Resources:
- [Learn Git Branching (Levels 7-8)](https://learngitbranching.js.org/)
- [Pro Git Ch6.4: Rewriting History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)

---

### Day 12-14: Real Project Practice & Recovery
**Time commitment:** 3-4 hours

#### Tasks:
1. **Portfolio Project (Mini)**
   - [ ] Create a new repo: `portfolio-v1`
   - [ ] Add HTML/CSS project (simple 1-page website):
     - Home page with your name, skills, links
     - About section
     - Contact section
   - [ ] Make 5+ commits with good messages:
     - `Initialize project structure`
     - `Add home page layout`
     - `Style navigation bar`
     - `Add responsive design`
     - `Add contact form`
   - [ ] Create branches for each section
   - [ ] Open a PR, review, and merge

2. **Learn Git Recovery**
   - [ ] Make a "bad" commit intentionally
   - [ ] Use `git reflog` to find commit hash
   - [ ] Use `git reset --hard <hash>` to recover
   - [ ] Document what you learned

3. **Practice with Collaborator (Optional)**
   - [ ] Invite a friend to your portfolio repo
   - [ ] Give them contributor access
   - [ ] They create a branch, make a change, open a PR
   - [ ] You review and merge
   - [ ] Then you do the same on their repo

#### Resources:
- [GitHub Recovery Guide](https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files)

---

## Phase 1 Completion Checklist

### Knowledge
- [ ] Explain what a commit, branch, and merge are
- [ ] Understand the staging area and why it exists
- [ ] Know when to use rebase vs merge
- [ ] Understand what a PR is and why it's useful

### Skills
- [ ] Push and pull changes without conflicts (5+ times)
- [ ] Resolve a merge conflict manually
- [ ] Create and switch between branches
- [ ] Write clear, descriptive commit messages
- [ ] Use interactive staging (`git add -p`)
- [ ] Recover from mistakes using reflog

### Projects Completed
- [ ] Git practice repo with 10+ commits
- [ ] Portfolio website repo with proper branching and PR workflow
- [ ] One collaborative PR (given or received feedback)

### Tools & Setup
- [ ] SSH keys configured and tested
- [ ] Git configured globally (user.name, user.email)
- [ ] VS Code or editor configured with Git
- [ ] `.gitignore` properly set up in a project

---

## Daily Standup Template (Use this to track progress)

```
## Day [X] Summary
**Date:** YYYY-MM-DD

**What I Learned:**
- 

**What I Did:**
- 

**Commands I Used:**
- 

**Challenges:**
- 

**Questions for Later:**
- 

**Next Steps:**
- 
```

---

## Success Criteria for Phase 1

By the end of Week 2, you should be able to:

✅ **Confidently use these commands:**
```bash
git init
git clone
git add / git add -p
git commit
git branch / git checkout / git switch
git merge / git rebase
git push / git pull
git log / git reflog
```

✅ **Understand:**
- How Git stores commits (directed acyclic graph)
- The role of branches and how they merge
- When to use merge vs rebase
- The purpose of .gitignore
- How to write clear commit messages

✅ **Have practiced:**
- Creating & merging branches locally
- Resolving merge conflicts
- Opening & reviewing PRs on GitHub
- Recovering from mistakes
- Writing clear commit messages

---

## Tips for Success

1. **Type every command** — Don't copy/paste. Your muscle memory matters.
2. **Break it down** — One task per day, not all at once.
3. **Experiment freely** — Use `git reflog` if you mess up; you can almost always recover.
4. **Use Learn Git Branching** — The visualization is invaluable.
5. **Keep a learning journal** — Document what you learn each day.
6. **Review others' code** — Look at real PRs in popular repos.

---

## After Phase 1

Once you complete the checklist above:
- Move to **Phase 2: Collaborative Development & Pull Requests**
- Start contributing to real open-source projects
- Increase commit quality and PR standards
- Learn more advanced Git workflows (trunk-based, GitHub flow, Git flow)

Good luck! 🚀
