# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 10 Nov 2021 05:49:55 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az154-755 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (251%)        | `600`ns (300%)                 | `1,996,008`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `801`ns (401%)        | `900`ns (450%)                 | `1,248,439`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,101`ns (551%)      | `1,200`ns (600%)               | `908,265`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,300`ns (650%)               | `833,333`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,801`ns (901%)      | `2,101`ns (1,051%)             | `555,247`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,103`ns (2,052%)    | `4,403`ns (2,202%)             | `243,724`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,403`ns (3,702%)    | `7,903`ns (3,952%)             | `135,080`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,201`ns (100%)      | `1,301`ns (108%)               | `832,639`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `40,927`ns (3,408%)   | `48,927`ns (4,074%)            | `24,434`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `59,007`ns (4,913%)   | `72,255`ns (6,016%)            | `16,947`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (397%)        | `501`ns (496%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `900`ns (891%)        | `1,101`ns (1,090%)             | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,001`ns (991%)      | `1,101`ns (1,090%)             | `999,001`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,401`ns (3,367%)    | `3,701`ns (3,664%)             | `294,031`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `400`ns (396%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,401`ns (1,387%)    | `1,701`ns (1,684%)             | `713,776`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,501`ns (1,486%)    | `1,701`ns (1,684%)             | `666,223`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,403`ns (4,359%)    | `4,703`ns (4,656%)             | `227,118`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,003`ns (4,953%)    | `5,303`ns (5,250%)             | `199,880`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `300`ns (100%)        | `400`ns (133%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `400`ns (133%)        | `401`ns (134%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (133%)        | `400`ns (133%)                 | `2,500,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (149%)        | `400`ns (199%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
