# CRIME | SLEUTHS
![video](https://j.gifs.com/w06gmm.gif)

### Table Of Contents

[Description](#description) 

[Outline](#outline)

[Requirements](#requirements) 

[Usage](#usage) 

[Contributing](#contributing) 

[License](#license) 

## Description 
Welcome to Crime Sleuths, a web blog application tailored for individuals who are passionate about investigating crimes and intrigued by the intricacies of human behavior. With an optimized stack that includes JS, React, HTML, CSS, and Ruby on Rails in the backend, Crime Sleuths ensures a seamless and user-friendly experience for all.

Crime Sleuths is the perfect platform for those who love the thrill of being an online detective. Whether you're interested in solving complex mysteries or delving into the psychological aspects of criminal behavior, this app has you covered.

## Outline

- Log in to gain access to the app.
  
  Create your own channel and add a post story to start a thread.
  Upon logging in, you will be redirected to the homepage.
          

- Community Guidelines:

  The homepage provides guidelines to ensure a safe and enjoyable environment for all users.

- Navigation Options:

  Dashboard: View all the posts and channels you have created.
  Logout: Sign out of your account.
  All Channels: Access a list of all available channels.
  Top Stories: Discover latest and trending stories.

- Dashboard Features:

  Comprehensive view: The dashboard presents all your posts and channels in an organized manner.
  Edit and delete: Empowers you to make changes to your posts and maintain control over your content.
  Convenient listing: Posts and channels are displayed in a user-friendly and easily accessible format.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Setup

Start by **cloning** (not forking) the project template repository and removing
the remote:

```console
$ git clone git@github.com:learn-co-curriculum/project-template-react-rails-api.git crime-sleuths
$ cd crime-sleuths
$ git remote rm origin
```

Then, [create a new remote repository][create repo] on GitHub. Head to
[github.com](https://github.com) and click the **+** icon in the top-right
corner and follow the steps to create a new repository. **Important**: don't
check any of the options such as 'Add a README file', 'Add a .gitignore file',
etc. — since you're importing an existing repository, creating any of those
files on GitHub will cause issues.

[create repo]: https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line#adding-a-project-to-github-without-github-cli

If you're working with a partner,
[add them as a collaborator][add collaborator] on GitHub. From your repo on
GitHub, go to Settings > Manage Access > Invite a collaborator and enter your
partner's username. Once your partner has access, they should git **clone** (not
fork) the repository.

[add collaborator]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository

Finally, connect the GitHub remote repository to your local repository and push
up your code:

```console
$ git remote add origin git@github.com:your-username/your-project-name.git
$ git push -u origin main
```

When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

Make sure to also update this README to include documentation about
your project. Here's a list of some [awesome readmes][] for inspiration.

[awesome readmes]: https://github.com/matiassingers/awesome-readme

## Deploying

This application has all the starter code needed to help you deploy your
application to Render. It's recommended to deploy your project early and push up
changes often to ensure that your code works equally well in production and
development environments.

The instructions in this section assume that you've already set up a Render
account, created a PostgreSQL instance in your account, and set up your
environment to deploy to Render. If you have not yet completed these steps, see
the Environment Setup section below.

### Create a Master Key File

In the project files, delete the `config/credentials.yml.enc` file. Then, in the
terminal, run the following:

```sh
$ EDITOR="code --wait" bin/rails credentials:edit
```

**Note**: if you use a different text editor than VS Code, you will need to replace
`code` with the appropriate command.

The command above will open a file in VS Code and wait for you to close it
before completing the process of creating the credential files. Once you've done
that, you should see both the `credentials.yml.enc` and `master.key` files in
the `config` folder. You will need the value in the `master.key` file to set up
the web service in Render.

Commit your changes and push them to GitHub.

### Create the App Database

Render allows users to create [multiple databases within a single PostgreSQL
instance][multiple dbs] using the PostgreSQL interactive terminal,
[`psql`][psql].

Navigate to your PostgreSQL instance from the Render dashboard, click the
"Connect" dropdown, then the External Connection tab, and copy the PSQL command.
Paste it into your terminal and press enter. This command connects you to the
remote PostgreSQL instance.

To create the database, run this SQL command:

```sql
CREATE DATABASE new_db_name;
```

Now if you run `\l` from the PSQL prompt, you should see a table that includes
your main PostgreSQL instance as well as the database you just created.

Run the `\q` command to exit PSQL.

[multiple dbs]: https://render.com/docs/databases#multiple-databases-in-a-single-postgresql-instance
[psql]: https://www.postgresql.org/docs/current/app-psql.html



## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

Render requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql







## Resources

- [Getting Started with Ruby on Rails on Render](https://render.com/docs/deploy-rails)
- [Render Databases Guide](https://render.com/docs/databases)
