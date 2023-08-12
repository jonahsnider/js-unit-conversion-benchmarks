# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 12 Aug 2023 00:25:44 GMT with Node.js v18.17.0 (V8 v10.2.154.26-node.26) on fv-az585-291 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `700`ns (348%)        | `800`ns (398%)                 | `1,428,571`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `801`ns (399%)        | `900`ns (448%)                 | `1,248,439`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,001`ns (498%)      | `1,101`ns (548%)               | `999,001`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,401`ns (697%)      | `1,600`ns (796%)               | `713,776`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,701`ns (846%)      | `1,800`ns (896%)               | `587,889`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,901`ns (1,443%)    | `3,201`ns (1,593%)             | `344,709`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,589%)    | `5,499`ns (2,736%)             | `192,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,503`ns (4,230%)    | `8,807`ns (4,382%)             | `117,606`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,800`ns (100%)      | `1,901`ns (106%)               | `555,556`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `61,823`ns (3,435%)   | `68,159`ns (3,787%)            | `16,175`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,847`ns (3,936%)   | `72,639`ns (4,035%)            | `14,115`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `400`ns (199%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (200%)        | `600`ns (299%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (299%)        | `700`ns (348%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (597%)      | `1,401`ns (697%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,599`ns (796%)      | `1,800`ns (896%)               | `625,391`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,303`ns (2,141%)    | `4,703`ns (2,340%)             | `232,396`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `700`ns (348%)        | `801`ns (399%)                 | `1,428,571`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,601`ns (797%)      | `1,801`ns (896%)               | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,900`ns (945%)      | `2,101`ns (1,045%)             | `526,316`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,303`ns (2,638%)    | `5,503`ns (2,738%)             | `188,573`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,303`ns (3,136%)    | `6,603`ns (3,285%)             | `158,655`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `501`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `501`ns (125%)        | `501`ns (125%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
