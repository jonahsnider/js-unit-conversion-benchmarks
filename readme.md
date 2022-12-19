# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 19 Dec 2022 07:19:04 GMT with Node.js v18.12.1 (V8 v10.2.154.15-node.12) on fv-az842-680 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (351%)        | `800`ns (400%)                 | `1,426,534`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `800`ns (400%)        | `900`ns (450%)                 | `1,250,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,001`ns (501%)      | `1,101`ns (551%)               | `999,001`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,600`ns (800%)      | `1,800`ns (900%)               | `625,000`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,901`ns (951%)      | `2,201`ns (1,101%)             | `526,039`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,601`ns (1,301%)    | `2,901`ns (1,451%)             | `384,468`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,602%)    | `5,803`ns (2,902%)             | `192,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,807`ns (4,404%)    | `9,103`ns (4,552%)             | `113,546`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,601`ns (100%)      | `1,800`ns (112%)               | `624,610`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `55,519`ns (3,468%)   | `62,015`ns (3,874%)            | `18,012`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,039`ns (4,437%)   | `72,639`ns (4,537%)            | `14,077`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `401`ns (201%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (251%)        | `700`ns (350%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (600%)      | `1,401`ns (701%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (801%)      | `1,800`ns (900%)               | `624,610`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,403`ns (2,202%)    | `5,103`ns (2,552%)             | `227,118`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,700`ns (850%)      | `2,000`ns (1,000%)             | `588,235`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,201`ns (1,101%)    | `2,601`ns (1,301%)             | `454,339`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,503`ns (2,752%)    | `5,703`ns (2,852%)             | `181,719`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,903`ns (3,452%)    | `7,603`ns (3,802%)             | `144,865`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
