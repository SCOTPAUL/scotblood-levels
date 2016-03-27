# From http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html

require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
GITHUB_REPONAME = "scotpaul/scotblood-levels"


namespace :site do
  desc "Generate csv file"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site"
    })).process
    system "./update_levels.sh"
  end


  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp

      pwd = Dir.pwd
      Dir.chdir tmp

      system "git pull"
      system "git add -u"
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git push origin gh-pages"

      Dir.chdir pwd
    end
  end
end
