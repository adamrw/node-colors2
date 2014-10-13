var luminosity = function(r, g, b){
    return 0.2126*r + 0.7152*g + 0.0722*b;
};

var darkenColorComponent = function(color){
    return color - (color * 0.2);
};

var darkenRGB = function(r, g, b){
    return {
        r: darkenColorComponent(r),
        g: darkenColorComponent(g),
        b: darkenColorComponent(b)
    };
};
module.exports = {
    luminosity: luminosity,
    darken: darkenRGB
};