# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 15 Jun 2022 02:31:23 GMT with Node.js v18.3.0 (V8 v10.2.154.4-node.8) on fv-az133-521 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
| [moment](https://npmjs.com/package/moment) (popular)               | `601`ns (299%)        | `601`ns (299%)                 | `1,663,894`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `900`ns (448%)        | `900`ns (448%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (448%)        | `901`ns (448%)                 | `1,111,111`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,301`ns (647%)      | `1,301`ns (647%)               | `768,640`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,101`ns (1,543%)    | `3,201`ns (1,593%)             | `322,477`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,403`ns (3,186%)    | `6,603`ns (3,285%)             | `156,177`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `800`ns (114%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `33,823`ns (4,825%)   | `37,407`ns (5,336%)            | `29,566`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `60,831`ns (8,678%)   | `63,103`ns (9,002%)            | `16,439`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `501`ns (249%)                 | `2,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (448%)        | `901`ns (448%)                 | `1,111,111`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,301`ns (1,642%)    | `3,301`ns (1,642%)             | `302,939`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `900`ns (448%)        | `901`ns (448%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (647%)      | `1,301`ns (647%)               | `768,640`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,001`ns (1,991%)    | `4,103`ns (2,041%)             | `249,938`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,803`ns (2,390%)    | `4,803`ns (2,390%)             | `208,203`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `501`ns (125%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
