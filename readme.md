# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 29 Aug 2022 22:24:30 GMT with Node.js v18.8.0 (V8 v10.2.154.13-node.11) on fv-az196-465 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `601`ns (299%)        | `701`ns (349%)                 | `1,663,894`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `700`ns (348%)        | `701`ns (349%)                 | `1,428,571`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `901`ns (448%)        | `1,000`ns (498%)               | `1,109,878`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,501`ns (747%)      | `1,700`ns (846%)               | `666,223`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,700`ns (846%)      | `1,801`ns (896%)               | `588,235`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,501`ns (1,244%)    | `2,801`ns (1,394%)             | `399,840`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (2,340%)    | `4,903`ns (2,439%)             | `212,630`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,007`ns (4,481%)    | `9,303`ns (4,628%)             | `111,025`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,600`ns (114%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `56,223`ns (4,013%)   | `64,831`ns (4,627%)            | `17,786`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `74,559`ns (5,322%)   | `83,903`ns (5,989%)            | `13,412`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (200%)        | `501`ns (249%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `601`ns (299%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (597%)      | `1,500`ns (746%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,401`ns (697%)      | `1,801`ns (896%)               | `713,776`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,303`ns (2,141%)    | `4,503`ns (2,240%)             | `232,396`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `601`ns (299%)        | `800`ns (398%)                 | `1,663,894`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,601`ns (797%)      | `2,000`ns (995%)               | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,900`ns (945%)      | `2,101`ns (1,045%)             | `526,316`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,303`ns (2,638%)    | `5,503`ns (2,738%)             | `188,573`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,003`ns (2,987%)    | `6,303`ns (3,136%)             | `166,583`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `501`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `301`ns (150%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
