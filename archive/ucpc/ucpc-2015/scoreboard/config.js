feed_server_path = './';
config =
{
    environment : 'production',
    apiBase : feed_server_path,
    path : {
        'events_ws' : (feed_server_path + 'events')
            .replace('http://', 'ws://')
            .replace('https://', 'wss://'),
        'award_slide.json' : (feed_server_path + 'award.json')
    },
    auto_rundiff       : true,
    fetch_timeout      : 30000,
    show_team_group    : true,
    show_first_solve   : true,
    show_balloons   : true,
    auto_play          : true,
    show_events        : false,
    max_notifications  : 100,
    animation          : false,
    auto_play_delay    : 100,
    auto_refresh_interval : 30000,
    pagination      : false,
    pagination_size : 50,

    use_followed_team_sticky : true,

    exclude_teams : function(team) {
        return false;
    },

    foreign_teams : function(team) {
				return false;
    },

    award_mode         : false,

    award_hide_name    : true,
    award_rank_begin   : null,

    award_animation_speeds: [
      { solved: 10, fastFlipSpeed: 600, slowFlipSpeed: 1000, utuSpeedFunc: function(up_cnt) { return Math.min(500 + up_cnt * 100, 1000); } },
      { solved: 9,  fastFlipSpeed: 400,  slowFlipSpeed: 600, utuSpeedFunc: function(up_cnt) { return Math.min(500 + up_cnt * 100, 1000); } },
      { solved: 7,  fastFlipSpeed: 200,  slowFlipSpeed: 300,  utuSpeedFunc: function(up_cnt) { return Math.min(500 + up_cnt * 100, 1000); } },
      { solved: 3,  fastFlipSpeed: 150,  slowFlipSpeed: 150,  utuSpeedFunc: function(up_cnt) { return Math.min(250 + up_cnt * 50, 1500); } },
      { solved: 0,  fastFlipSpeed: 150,  slowFlipSpeed: 150,  utuSpeedFunc: function(up_cnt) { return Math.min(150 + up_cnt * 30, 500); } }
    ],

    award_reveal_order : [],

    award_focus_blinking : function(teamStatus) {
      var solved = teamStatus.getTotalSolved();
      var currentRank = teamStatus.getRank();
      return solved >= 7 || currentRank <= 10;
    },
};

config.environment = "production";
config.auto_play = false;
config.auto_rundiff = false;
config.auto_refresh_interval = 0;
