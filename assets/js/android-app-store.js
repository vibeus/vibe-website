/*
{{ $apps := slice }}
{{ range .context.Site.Data.android_apps.apps }}
{{ $src := resources.Get (print "img/android-app-store/icons/" .id ".png" ) | resources.Fingerprint }}
{{ $apps = $apps | append (merge . (dict "icon" $src.RelPermalink)) }}
{{ end }}
{{ $searchIcon := resources.Get "mdi/svg/magnify.svg" | resources.Fingerprint }}
*/

const category = JSON.parse(
  '{{ .context.Site.Data.android_apps_category | jsonify }}'
);
const apps = JSON.parse('{{ $apps | jsonify }}');
const searchIcon = '{{ $searchIcon.RelPermalink }}';

apps.sort((x, y) => {
  const lx = x.name.toLowerCase();
  const ly = y.name.toLowerCase();
  if (lx < ly) {
    return -1;
  } else if (lx > ly) {
    return 1;
  } else {
    return 0;
  }
});

const e = React.createElement;
const { useState } = React;

const Search = ({ searchTerm, setSearchTerm }) => {
  return e(
    'div',
    {
      className: 'control is-search-box has-icons-left',
    },
    e('input', {
      className: 'input is-rounded',
      type: 'text',
      value: searchTerm,
      onChange: (ev) => {
        setSearchTerm(ev.target.value);
      },
    }),
    e(
      'span',
      {
        className: 'icon is-left',
      },
      e('img', {
        src: searchIcon,
      })
    )
  );
};

const AppItem = ({ item }) => {
  return e(
    'div',
    {
      className: 'app-item',
    },
    e(
      'figure',
      {
        className: 'image is-app-icon',
      },
      e('img', {
        src: item.icon,
      })
    ),
    e(
      'div',
      null,
      e(
        'p',
        {
          className: 'app-name',
        },
        item.name
      ),
      e(
        'p',
        {
          className: 'app-type',
        },
        category.types.find((x) => x.id === item.type).name
      )
    )
  );
};

const AppList = ({ apps }) => {
  return e(
    'div',
    {
      className: 'columns is-multiline',
    },
    apps.map((x) =>
      e(
        'div',
        {
          className: 'column is-one-third-desktop is-half-tablet',
        },
        e(AppItem, { item: x })
      )
    )
  );
};

const ListHeader = ({ title, onSeeAllClick }) => {
  return e(
    'div',
    {
      className: 'level is-list-header is-mobile',
    },
    e(
      'div',
      {
        className: 'level-left',
      },
      e(
        'div',
        {
          className: 'level-item is-title',
        },
        title
      )
    ),
    !onSeeAllClick
      ? null
      : e(
          'div',
          {
            className: 'level-right',
          },
          e(
            'div',
            {
              className: 'level-item is-see-all',
            },
            e(
              'a',
              {
                onClick: (ev) => {
                  ev.preventDefault();
                  onSeeAllClick && onSeeAllClick();
                },
              },
              'See All'
            )
          )
        )
  );
};

const AppListWithHeader = ({ title, onSeeAllClick, apps }) => {
  return e(
    'div',
    {
      className: 'app-list-with-header',
    },
    e(ListHeader, { title, onSeeAllClick }),
    e(AppList, { apps })
  );
};

const DefaultView = () => {
  return e(
    'div',
    {
      className: 'default-view',
    },
    e(AppListWithHeader, {
      title: 'Featured apps',
      apps: apps.filter((x) => x.featured).slice(0, 6),
    }),
    category.use_cases.map((u) =>
      e(AppListWithHeader, {
        title: u.name,
        apps: apps.filter((x) => x.use_case === u.id).slice(0, 6),
        onSeeAllClick: () => setState({ useCase: u.id }),
      })
    )
  );
};

const ClearFilter = () => {
  return e(
    'div',
    {
      className: 'clear-filter',
    },
    e(
      'button',
      {
        className: 'button is-rounded is-black is-outlined',
        onClick: () => setState({}),
      },
      'Clear Filter'
    )
  );
};

const App = ({ useCase, type }) => {
  const [searchTerm, setSearchTerm] = useState();

  let listView = null;
  let clearFilter = null;
  if (searchTerm) {
    listView = e(AppList, {
      apps: apps.filter(
        (x) => x.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
      ),
    });
  } else if (useCase) {
    listView = e(AppList, {
      apps: apps.filter((x) => appInUseCase(x, useCase)),
    });
    clearFilter = e(ClearFilter);
  } else if (type) {
    listView = e(AppList, {
      apps: apps.filter((x) => x.type === type),
    });
    clearFilter = e(ClearFilter);
  } else {
    listView = e(DefaultView);
  }

  return e(
    'div',
    {
      className: 'app-main',
    },
    e(Search, { searchTerm, setSearchTerm }),
    listView,
    clearFilter
  );
};

const root = document.getElementById('app-root');

function appInUseCase(app, useCase) {
  if (!app.use_case) {
    return false;
  }

  if (typeof app.use_case === 'string') {
    return app.use_case === useCase;
  } else {
    return app.use_case.indexOf(useCase) >= 0;
  }
}

function renderApp(state) {
  if (root) {
    ReactDOM.render(e(App, state), root);
  }
}

function setState({ useCase, type }) {
  const state = { useCase, type };
  let url = '#';
  if (useCase) {
    url = '#category=' + useCase;
  } else if (type) {
    url = '#type=' + type;
  }

  history.pushState(state, null, url);
  renderApp(state);
}

function main() {
  document.querySelectorAll('.side-bar-link').forEach((el) => {
    const isUseCase = el.classList.contains('is-use-case');
    const isType = el.classList.contains('is-type');
    const id = el.dataset.id;

    el.addEventListener('click', (ev) => {
      ev.preventDefault();

      if (isUseCase) {
        setState({ useCase: id });
      } else if (isType) {
        setState({ type: id });
      }
    });
  });

  window.addEventListener('popstate', (ev) => {
    setState(ev.state || {});
  });

  const state = {};
  const hash = location.hash;
  if (hash) {
    const params = new URLSearchParams(hash.replace(/^#/, ''));
    const useCase = params.get('category');
    const type = params.get('type');
    if (useCase) {
      state.useCase = useCase;
    } else if (type) {
      state.type = type;
    }
  }

  renderApp(state);
}

main();
