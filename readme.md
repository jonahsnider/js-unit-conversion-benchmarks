# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 29 Mar 2023 03:39:45 GMT with Node.js v18.15.0 (V8 v10.2.154.26-node.25) on fv-az453-225 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (200%)        | `500`ns (249%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (349%)        | `801`ns (399%)                 | `1,426,534`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (349%)        | `701`ns (349%)                 | `1,426,534`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,100`ns (547%)      | `1,200`ns (597%)               | `909,091`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,700`ns (846%)      | `1,800`ns (896%)               | `588,235`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,101`ns (1,045%)    | `2,201`ns (1,095%)             | `475,964`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,801`ns (1,394%)    | `3,001`ns (1,493%)             | `357,015`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,903`ns (2,937%)    | `6,003`ns (2,987%)             | `169,405`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,703`ns (4,330%)    | `8,903`ns (4,429%)             | `114,903`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,600`ns (100%)      | `1,700`ns (106%)               | `625,000`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `59,103`ns (3,694%)   | `66,111`ns (4,132%)            | `16,920`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `69,055`ns (4,316%)   | `70,847`ns (4,428%)            | `14,481`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `600`ns (299%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `600`ns (299%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (597%)      | `1,400`ns (697%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (597%)      | `1,600`ns (796%)               | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,203`ns (2,091%)    | `4,303`ns (2,141%)             | `237,925`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (299%)        | `701`ns (349%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,700`ns (846%)      | `1,901`ns (946%)               | `588,235`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,000`ns (995%)      | `2,201`ns (1,095%)             | `500,000`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,403`ns (2,688%)    | `5,603`ns (2,788%)             | `185,082`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,803`ns (3,385%)    | `6,903`ns (3,434%)             | `146,994`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `600`ns (150%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `501`ns (125%)        | `600`ns (150%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
