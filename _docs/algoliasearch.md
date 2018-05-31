---
title: Algolia Search
description: How to Setup Algolia Search
category: Docs
date: 2017-07-10 15:00:00
---

# Algolia Search

[Algolia](https://www.algolia.com/) is the latest/greatest tool for adding search functionality to websites.

Jekyll has been historically remiss in having search capabilities, so I felt the need to add some in.

There are other ways to do this, namely via either a home-grown instant search that relies on a local JSON file; or with Lunr, which is okay, but not as good as Algolia. I've tried both, and Algolia, it is.

Now, I've already done most of the grunt-work getting this setup, so the following is what you need to do to get it working for yourself.

1.  Head on over to [Algolia](https://www.algolia.com/) and setup an account. The Community (free) plan is free, as long as you display the proper Algolia branding in the rights spots, which I do already in the template.
2.  Create an index on Algolia that you're going to use on your own site. Remember it for step 4.
3.  Go to API Keys on Algolia and write down the `Application ID` and the `Search-Only API Key` for use in the next step
4.  Open the `config.yml` file in the root of the sakura theme, and edit per the below:

```yaml
# Algolia Search
algolia:
  application_id: changeme # Use your (not mine and non-admin) search only api key here
  index_name: changeme # Use the index you created on Algolia (from step 2 above)
```

Now this is where it might get a bit hairy, because I've got no way to know how you've got things setup on your local machine with regard to `environment variables`. That said, here's what I do:

5.  Edit your `.bashrc` file or `.bash_profile`, depending on your setup, and add the following (If you're on Windows, I'll need to add other instructions in, as I forget how to do that):

```shell
export ALGOLIA_API_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" <= your *ADMIN* API KEY goes here
```

Because this is getting setup on your **local** environment, nobody can see this but you **and Gulp** when you run the following command locally:

```shell
yarn index
```

This will execute the following Gulp task:

```js
gulp.task("build:index-algolia", cb => {
  var algolia = process.env.ALGOLIA_API_KEY;
  var shellCommand = "ALGOLIA_API_KEY=" + algolia + " jekyll algolia";

  return gulp
    .src("")
    .pipe(run(shellCommand))
    .on("error", gutil.log);
  cb();
});
```

This should result in something like the below:

```js
yarn run v1.5.1
$ gulp build:index-algolia
[01:01:24] Using gulpfile ~/Sites/workspace/sakura/gulpfile.js
[01:01:24] Starting 'build:index-algolia'...
[01:01:40] Finished 'build:index-algolia' after 15 s
$ ALGOLIA_API_KEY=******************************** jekyll algolia <- !!! Note that your actual API key gets exposed here!
Configuration file: /somelongpath/_config.yml <- your path will look different
Processing site...
         AutoPages: Disabled/Not configured in site.config.
        Pagination: Complete, processed 3 pagination page(s)

Progress: |==============================================================================================================|

Progress: |=======================================================================================================Settings are already up to date.
Getting list of existing records
Updating records in index sakura...
Records to delete: 68
Records to add: 66
✔ Indexing complete
✨  Done in 33.25s.
```
