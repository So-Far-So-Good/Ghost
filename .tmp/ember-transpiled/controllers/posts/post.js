define("ghost/controllers/posts/post", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var PostController = Ember.Controller.extend({
        isPublished: Ember.computed.equal('model.status', 'published'),
        classNameBindings: ['model.featured'],

        actions: {
            toggleFeatured: function () {
                var options = {disableNProgress: true},
                    self = this;

                this.toggleProperty('model.featured');
                this.get('model').save(options).catch(function (errors) {
                    self.notifications.showErrors(errors);
                });
            },
            showPostContent: function () {
                this.transitionToRoute('posts.post', this.get('model'));
            }
        }
    });

    __exports__["default"] = PostController;
  });