# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 27 Jan 2024 21:01:53 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1118-747 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `112`ns (100%)        | `210`ns (188%)                 | `8,928,571`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `191`ns (171%)        | `391`ns (349%)                 | `5,235,602`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `240`ns (214%)        | `542`ns (484%)                 | `4,166,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `301`ns (269%)        | `622`ns (555%)                 | `3,322,259`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `521`ns (465%)        | `1,223`ns (1,092%)             | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `652`ns (582%)        | `1,382`ns (1,234%)             | `1,533,742`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `672`ns (600%)        | `1,513`ns (1,351%)             | `1,488,095`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,232`ns (1,100%)    | `2,855`ns (2,549%)             | `811,688`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,565`ns (2,290%)    | `4,991`ns (4,456%)             | `389,864`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,491`ns (4,010%)    | `9,751`ns (8,706%)             | `222,668`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `761`ns (100%)        | `902`ns (119%)                 | `1,314,060`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,711`ns (4,167%)   | `38,911`ns (5,113%)            | `31,535`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,063`ns (5,265%)   | `40,767`ns (5,357%)            | `24,961`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (184%)        | `410`ns (204%)                 | `2,702,703`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `510`ns (254%)        | `552`ns (275%)                 | `1,960,784`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (284%)        | `621`ns (309%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,334`ns (664%)      | `1,424`ns (708%)               | `749,625`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,353`ns (673%)      | `1,463`ns (728%)               | `739,098`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,839`ns (2,407%)    | `5,103`ns (2,539%)             | `206,654`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `412`ns (196%)        | `481`ns (229%)                 | `2,427,184`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `502`ns (239%)        | `571`ns (272%)                 | `1,992,032`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,322`ns (630%)      | `1,463`ns (697%)               | `756,430`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,683`ns (801%)      | `1,955`ns (931%)               | `594,177`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,851`ns (2,786%)    | `6,131`ns (2,920%)             | `170,911`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,395`ns (3,045%)    | `7,055`ns (3,360%)             | `156,372`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `642`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `592`ns (104%)        | `661`ns (116%)                 | `1,689,189`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `661`ns (116%)        | `751`ns (132%)                 | `1,512,859`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `342`ns (110%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (171%)        | `591`ns (190%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
