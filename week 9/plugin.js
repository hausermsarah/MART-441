$.ajax({
    url: 'https://data.nasa.gov/resource/2vr3-k9wn.json',
    dataType: 'json',
    success: function(data) {
        var $container = $('#data-container');
        data.forEach(function(item) {
            $container.append('<div class="data-item">' +
                '<h2>' + item.designation + '</h2>' +
                '<p>Discovery Date: ' + item.discovery_date + '</p>' +
                '<p>Magnitude: ' + item.h_mag + '</p>' +
                '<p>MOID (AU): ' + item.moid_au + '</p>' +
                '<p>Orbit Class: ' + item.orbit_class + '</p>' +
                '</div>');
        });

        $('#apply-plugin').click(function() {
            $('.data-item').myDataPlugin({
                color: 'blue',
                fontSize: '20px'
            });
        });
    },
    error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
    }
});
