# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 13 Jul 2024 16:00:05 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az915-519 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (251%)        | `341`ns (284%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (376%)        | `501`ns (418%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (468%)        | `631`ns (526%)                 | `1,782,531`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,113`ns (928%)      | `1,182`ns (985%)               | `898,473`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,403`ns (1,169%)    | `1,502`ns (1,252%)             | `712,758`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,423`ns (1,186%)    | `1,543`ns (1,286%)             | `702,741`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,767`ns (2,306%)    | `2,917`ns (2,431%)             | `361,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,459`ns (3,716%)    | `4,711`ns (3,926%)             | `224,266`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,343`ns (61,119%)  | `73,855`ns (61,546%)           | `13,635`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `902`ns (100%)        | `1,102`ns (122%)               | `1,108,647`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,087`ns (4,112%)   | `51,903`ns (5,754%)            | `26,964`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,463`ns (9,586%)   | `158,591`ns (17,582%)          | `11,566`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `160`ns (107%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (213%)        | `391`ns (261%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (307%)        | `561`ns (374%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (354%)        | `651`ns (434%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,342`ns (895%)      | `1,793`ns (1,195%)             | `745,156`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,399`ns (2,933%)    | `5,483`ns (3,655%)             | `227,324`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,055`ns (24,703%)  | `38,655`ns (25,770%)           | `26,987`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (239%)        | `341`ns (262%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (339%)        | `501`ns (385%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,403`ns (1,079%)    | `1,502`ns (1,155%)             | `712,758`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,793`ns (1,379%)    | `1,944`ns (1,495%)             | `557,724`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,295`ns (4,842%)    | `6,703`ns (5,156%)             | `158,856`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,959`ns (62,276%)  | `81,535`ns (62,719%)           | `12,352`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (108%)        | `581`ns (118%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `622`ns (127%)        | `692`ns (141%)                 | `1,607,717`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `250`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `561`ns (244%)        | `621`ns (270%)                 | `1,782,531`/sec       |

<!-- endblock(results) -->
