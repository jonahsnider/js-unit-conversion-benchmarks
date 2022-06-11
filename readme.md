# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 11 Jun 2022 12:27:38 GMT with Node.js v18.3.0 (V8 v10.2.154.4-node.8) on fv-az241-805 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `600`ns (300%)                 | `1,666,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `900`ns (450%)        | `900`ns (450%)                 | `1,111,111`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,200`ns (600%)      | `1,400`ns (700%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (651%)      | `1,500`ns (750%)               | `768,640`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,001`ns (1,001%)    | `2,301`ns (1,151%)             | `499,750`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,103`ns (2,052%)    | `4,403`ns (2,202%)             | `243,724`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,803`ns (3,902%)    | `8,303`ns (4,152%)             | `128,156`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,501`ns (107%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `50,303`ns (3,591%)   | `59,711`ns (4,262%)            | `19,880`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `66,623`ns (4,755%)   | `77,759`ns (5,550%)            | `15,010`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `501`ns (251%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,100`ns (550%)      | `1,301`ns (651%)               | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,101`ns (551%)      | `1,500`ns (750%)               | `908,265`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,501`ns (1,751%)    | `3,801`ns (1,901%)             | `285,633`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `401`ns (201%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `600`ns (300%)                 | `2,500,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,401`ns (701%)      | `1,701`ns (851%)               | `713,776`/sec         |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,401`ns (701%)      | `1,800`ns (900%)               | `713,776`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,803`ns (2,402%)    | `5,103`ns (2,552%)             | `208,203`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,003`ns (2,502%)    | `5,403`ns (2,702%)             | `199,880`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
