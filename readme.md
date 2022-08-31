# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 31 Aug 2022 23:06:42 GMT with Node.js v18.8.0 (V8 v10.2.154.13-node.11) on fv-az451-959 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (134%)        | `500`ns (167%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (234%)        | `800`ns (267%)                 | `1,426,534`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `1,000`ns (333%)      | `1,100`ns (367%)               | `1,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,200`ns (400%)      | `1,200`ns (400%)               | `833,333`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,601`ns (534%)      | `1,800`ns (600%)               | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (600%)      | `2,000`ns (667%)               | `555,556`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,701`ns (900%)      | `3,001`ns (1,000%)             | `370,233`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,103`ns (1,701%)    | `5,303`ns (1,768%)             | `195,963`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,807`ns (3,269%)    | `10,207`ns (3,402%)            | `101,968`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,501`ns (107%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `52,607`ns (3,755%)   | `58,623`ns (4,184%)            | `19,009`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,839`ns (5,413%)   | `81,535`ns (5,820%)            | `13,186`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `600`ns (299%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `600`ns (299%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (647%)      | `1,600`ns (796%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (647%)      | `1,700`ns (846%)               | `768,640`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,203`ns (2,091%)    | `4,403`ns (2,191%)             | `237,925`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (299%)        | `800`ns (398%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,501`ns (747%)      | `2,000`ns (995%)               | `666,223`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,701`ns (846%)      | `2,101`ns (1,045%)             | `587,889`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,503`ns (2,738%)    | `5,803`ns (2,887%)             | `181,719`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,903`ns (2,937%)    | `6,103`ns (3,036%)             | `169,405`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `600`ns (150%)        | `600`ns (150%)                 | `1,666,667`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `600`ns (150%)        | `600`ns (150%)                 | `1,666,667`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `301`ns (150%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `500`ns (249%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
