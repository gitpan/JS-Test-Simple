// $Id: /mirror/openjsan/users/theory/Test.Simple/trunk/lib/Test/Simple.js 1642 2008-07-03T08:20:55.797043Z ingy  $

/*global JSAN, Test */

// Set up package.
if (typeof JSAN != 'undefined') JSAN.use('Test.Builder');
else {
    if (typeof Test == 'undefined' || typeof Test.Builder == 'undefined')
        throw new Error(
            "You must load either JSAN or Test.Builder "
            + "before loading Test.Simple"
        );
}

Test.Simple = {};
Test.Simple.EXPORT      = ['plan', 'ok'];
Test.Simple.EXPORT_TAGS = { ':all': Test.Simple.EXPORT };
Test.Simple.VERSION     = '0.24';

Test.Simple.plan = function (cmds) {
    return Test.Simple.Test.plan(cmds);
};

Test.Simple.ok = function (val, desc) {
    return Test.Simple.Test.ok(val, desc);
};

// Handle exporting.
if (typeof JSAN == 'undefined') Test.Builder.exporter(Test.Simple);

Test.Simple.Test = Test.Builder.instance();
