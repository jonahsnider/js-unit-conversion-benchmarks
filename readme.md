# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 01 Dec 2023 00:57:00 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1429-363 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `170`ns (100%)        | `200`ns (118%)                 | `5,882,353`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `332`ns (195%)        | `422`ns (248%)                 | `3,012,048`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `420`ns (247%)        | `572`ns (336%)                 | `2,380,952`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `542`ns (319%)        | `662`ns (389%)                 | `1,845,018`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `881`ns (518%)        | `1,102`ns (648%)               | `1,135,074`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,131`ns (665%)      | `1,584`ns (932%)               | `884,173`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,193`ns (702%)      | `1,574`ns (926%)               | `838,223`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,325`ns (1,368%)    | `2,917`ns (1,716%)             | `430,108`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,029`ns (2,370%)    | `5,031`ns (2,959%)             | `248,201`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,799`ns (5,176%)    | `9,551`ns (5,618%)             | `113,649`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `831`ns (100%)        | `942`ns (113%)                 | `1,203,369`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,223`ns (3,878%)   | `39,391`ns (4,740%)            | `31,034`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,935`ns (4,806%)   | `40,703`ns (4,898%)            | `25,041`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `221`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (189%)        | `412`ns (216%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (231%)        | `491`ns (257%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (299%)        | `622`ns (326%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,274`ns (667%)      | `1,372`ns (718%)               | `784,929`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,374`ns (719%)      | `1,482`ns (776%)               | `727,802`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,683`ns (2,452%)    | `4,911`ns (2,571%)             | `213,538`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `211`ns (117%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (205%)        | `422`ns (233%)                 | `2,695,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `432`ns (239%)        | `502`ns (277%)                 | `2,314,815`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,274`ns (704%)      | `1,383`ns (764%)               | `784,929`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,744`ns (964%)      | `1,924`ns (1,063%)             | `573,394`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,843`ns (3,228%)    | `6,023`ns (3,328%)             | `171,145`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,455`ns (3,566%)    | `6,843`ns (3,781%)             | `154,919`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `642`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `603`ns (106%)        | `672`ns (118%)                 | `1,658,375`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (118%)        | `762`ns (133%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `282`ns (100%)        | `311`ns (110%)                 | `3,546,099`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `502`ns (178%)        | `561`ns (199%)                 | `1,992,032`/sec       |

<!-- endblock(results) -->
