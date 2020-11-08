<app-header>
  <nav>
    <a href="/" class="logo"><img src="src/img/logo.png" alt="logo"></a>
    <a each={ navItems } href="{ link }">{ name }</a>
  </nav>

  <script>
    this.navItems = [
      { link: '/', name: 'Top' },
      { link: '/new',  name: 'News' },
      { link: '/show', name: 'Show' },
      { link: '/ask',  name: 'Ask'  },
      { link: '/jobs', name: 'Jobs' },
    ]
  </script>

  <style type="text/scss">
    app-header {
        background-color: #FF0044;
        font-family: Josefin Sans;
        height: 50px;
        top: 0;
        display: block;
        position: -webkit-sticky;
        position: sticky;

        a {
            color: #FFF;
            margin-right: 6px;
        }
    }
  </style>
</app-header>
