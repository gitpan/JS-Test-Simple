use lib 'lib';
use Test::More tests => 1;

use JS::Test::Simple;

is $JS::Test::Simple::VERSION, '0.26',
    'Perl Module loads';
