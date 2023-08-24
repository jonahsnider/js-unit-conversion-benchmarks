# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 24 Aug 2023 02:46:34 GMT with Node.js v18.17.1 (V8 v10.2.154.26-node.26) on fv-az564-748 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `501`ns (251%)        | `600`ns (300%)                 | `1,996,008`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `801`ns (401%)        | `900`ns (450%)                 | `1,248,439`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `801`ns (401%)        | `900`ns (450%)                 | `1,248,439`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,402`ns (701%)      | `1,500`ns (750%)               | `713,267`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,800`ns (900%)      | `1,901`ns (951%)               | `555,556`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,101`ns (1,051%)    | `2,201`ns (1,101%)             | `475,964`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `3,501`ns (1,751%)    | `3,801`ns (1,901%)             | `285,633`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,403`ns (3,202%)    | `6,603`ns (3,302%)             | `156,177`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,703`ns (4,852%)    | `10,103`ns (5,052%)            | `103,061`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,601`ns (100%)      | `1,800`ns (112%)               | `624,610`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `61,727`ns (3,856%)   | `68,863`ns (4,301%)            | `16,200`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,407`ns (4,585%)   | `78,655`ns (4,913%)            | `13,623`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (250%)        | `600`ns (300%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `600`ns (300%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (651%)      | `1,600`ns (800%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,500`ns (750%)      | `1,800`ns (900%)               | `666,667`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (2,252%)    | `4,703`ns (2,352%)             | `222,074`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `800`ns (400%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,700`ns (850%)      | `2,000`ns (1,000%)             | `588,235`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,901`ns (951%)      | `2,201`ns (1,101%)             | `526,039`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,803`ns (2,902%)    | `6,103`ns (3,052%)             | `172,325`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,103`ns (3,552%)    | `7,403`ns (3,702%)             | `140,786`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `300`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `401`ns (134%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
