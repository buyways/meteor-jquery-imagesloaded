Package.describe({
	summary: "jQuery ImagesLoaded plugin repackaged for Meteor"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files(['lib/masonry/jquery.imagesloaded.js'],'client');
});

