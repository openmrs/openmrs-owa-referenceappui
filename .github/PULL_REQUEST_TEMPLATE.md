## JIRA TICKET NAME:

### SUMMARY:

## Checklist: I completed these to help reviewers
 - [ ] My pull request only contains ONE single commit (the number above, next to the 'Commits' tab is 1).
No? -> [read here](https://wiki.openmrs.org/display/docs/Pull+Request+Tips) on how to squash multiple commits into one

- [ ] My IDE is configured to follow the [code style](https://wiki.openmrs.org/display/docs/Java+Conventions) of this project.
No? Unsure? -> [configure your IDE](https://wiki.openmrs.org/display/docs/How-To+Setup+And+Use+Your+IDE), format the code and add the changes with `git add . && git commit --amend`

- [ ] I have **added tests** to cover my changes. (If you refactored existing code that was well tested you do not have to add tests)
No? -> write tests and add them to this commit `git add . && git commit --amend`

- [ ] I ran `mvn clean package` right before creating this pull request and added all formatting changes to my commit.
No? -> execute above command

- [ ] All new and existing **tests passed**.
No? -> figure out why and add the fix to your commit. It is your responsibility to make sure your code works.

- [x  My pull request is **based on the latest changes** of the master branch.
No? Unsure? -> execute command `git pull --rebase upstream master`