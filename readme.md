# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 15 Dec 2021 02:40:16 GMT with Node.js v16.13.1 (V8 v9.4.146.24-node.14) on fv-az154-544 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (396%)        | `401`ns (397%)                 | `2,500,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `700`ns (693%)        | `701`ns (694%)                 | `1,428,571`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `801`ns (793%)        | `801`ns (793%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (891%)        | `900`ns (891%)                 | `1,111,111`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,201`ns (1,189%)    | `1,301`ns (1,288%)             | `832,639`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,101`ns (3,070%)    | `3,201`ns (3,169%)             | `322,477`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,703`ns (6,637%)    | `6,803`ns (6,736%)             | `149,187`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `801`ns (114%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,919`ns (4,553%)   | `32,511`ns (4,638%)            | `31,329`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `62,527`ns (8,920%)   | `63,423`ns (9,048%)            | `15,993`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `202`ns (200%)        | `300`ns (297%)                 | `4,950,495`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (396%)        | `401`ns (397%)                 | `2,500,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `801`ns (793%)        | `801`ns (793%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (891%)        | `900`ns (891%)                 | `1,111,111`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,301`ns (3,268%)    | `3,401`ns (3,367%)             | `302,939`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,102`ns (1,091%)    | `1,200`ns (1,188%)             | `907,441`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,203`ns (4,161%)    | `4,203`ns (4,161%)             | `237,925`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (4,458%)    | `4,603`ns (4,557%)             | `222,074`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `400`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (149%)        | `400`ns (199%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
