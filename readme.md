# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 05 Jun 2022 01:21:06 GMT with Node.js v18.3.0 (V8 v10.2.154.4-node.8) on fv-az212-861 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `700`ns (348%)        | `701`ns (349%)                 | `1,428,571`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `900`ns (448%)        | `900`ns (448%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (448%)        | `1,000`ns (498%)               | `1,111,111`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,200`ns (597%)      | `1,301`ns (647%)               | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,101`ns (1,543%)    | `3,201`ns (1,593%)             | `322,477`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,403`ns (3,186%)    | `6,503`ns (3,235%)             | `156,177`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `800`ns (114%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `33,727`ns (4,811%)   | `36,927`ns (5,268%)            | `29,650`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `59,327`ns (8,463%)   | `60,319`ns (8,605%)            | `16,856`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `900`ns (448%)        | `901`ns (448%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `901`ns (448%)        | `1,000`ns (498%)               | `1,109,878`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,201`ns (1,593%)    | `3,301`ns (1,642%)             | `312,402`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `900`ns (448%)        | `901`ns (448%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (597%)      | `1,200`ns (597%)               | `833,333`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,001`ns (1,991%)    | `4,103`ns (2,041%)             | `249,938`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,403`ns (2,191%)    | `4,403`ns (2,191%)             | `227,118`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
