from flask import Blueprint, render_template


main_routes_blueprint = Blueprint("main_routes", __name__)



@main_routes_blueprint.route('/')
@main_routes_blueprint.route('/home')
@main_routes_blueprint.route('/home/')
def main_home():
    return render_template("main/home.html")


@main_routes_blueprint.route('/about')
@main_routes_blueprint.route('/about/')
def about():
    return render_template("main/about.html")