# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 09 Feb 2024 10:46:23 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1148-781 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (210%)        | `441`ns (231%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `542`ns (284%)        | `602`ns (315%)                 | `1,845,018`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `651`ns (341%)        | `722`ns (378%)                 | `1,536,098`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,182`ns (619%)      | `1,282`ns (671%)               | `846,024`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,403`ns (735%)      | `1,523`ns (797%)               | `712,758`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,413`ns (740%)      | `1,563`ns (818%)               | `707,714`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,647`ns (1,386%)    | `2,827`ns (1,480%)             | `377,786`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,771`ns (2,498%)    | `5,071`ns (2,655%)             | `209,600`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,415`ns (4,929%)    | `9,559`ns (5,005%)             | `106,213`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `831`ns (100%)        | `913`ns (110%)                 | `1,203,369`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,471`ns (3,787%)   | `38,047`ns (4,578%)            | `31,775`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,415`ns (4,863%)   | `40,927`ns (4,925%)            | `24,743`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `212`ns (106%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (176%)        | `401`ns (201%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (246%)        | `561`ns (281%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (281%)        | `641`ns (321%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,202`ns (601%)      | `1,373`ns (687%)               | `831,947`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,234`ns (617%)      | `1,364`ns (682%)               | `810,373`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,339`ns (2,170%)    | `4,851`ns (2,426%)             | `230,468`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `221`ns (100%)        | `242`ns (110%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (177%)        | `422`ns (191%)                 | `2,557,545`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (218%)        | `521`ns (236%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,353`ns (612%)      | `1,423`ns (644%)               | `739,098`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,783`ns (807%)      | `1,895`ns (857%)               | `560,852`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,915`ns (2,676%)    | `6,055`ns (2,740%)             | `169,062`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,663`ns (3,015%)    | `6,895`ns (3,120%)             | `150,083`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `642`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (105%)        | `662`ns (116%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (118%)        | `753`ns (132%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `312`ns (100%)        | `351`ns (113%)                 | `3,205,128`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (177%)        | `603`ns (193%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
