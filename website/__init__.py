import os
from flask import Flask, render_template
from .main_routes import main_routes_blueprint


def create_app():
    app = Flask(
        __name__,
        template_folder = os.path.join("front_end", "pages"),
        static_folder = os.path.join("front_end", "assets"),
    )
    
    app.register_blueprint(main_routes_blueprint, url_prefix='/')
    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('404.html'), 404
    
    return app