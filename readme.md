# Git Commands

git init - Create a new git repo
git status- View the changes to your project code
git add - Add files to staging area
git commit - Creates a new  commit with files from staging area
git log - View recent commits

Generating SSH key:
ls -a ~/.ssh ---- does the ssh key exists
ssh-keygen -t rsa -b 4096 -C "padagantla.padagantla@gmail.com" -- generating public and private key

eval "$(ssh-agent -s)---Agent pid 31894
ssh-add ~/.ssh/id_rsa
clip <~/.ssh/id_rsa.pub
ssh -T git@github.com
