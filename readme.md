# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 14 Nov 2021 11:55:29 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az290-364 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `400`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `600`ns (300%)                 | `2,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `901`ns (451%)        | `1,000`ns (500%)               | `1,109,878`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,100`ns (550%)      | `1,200`ns (600%)               | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,301`ns (651%)               | `833,333`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,800`ns (900%)      | `2,101`ns (1,051%)             | `555,556`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (2,001%)    | `4,203`ns (2,102%)             | `249,938`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,903`ns (3,452%)    | `7,303`ns (3,652%)             | `144,865`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,200`ns (100%)      | `1,301`ns (108%)               | `833,333`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `38,623`ns (3,219%)   | `41,023`ns (3,419%)            | `25,891`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `55,103`ns (4,592%)   | `59,519`ns (4,960%)            | `18,148`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `301`ns (298%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (298%)        | `301`ns (298%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (397%)        | `500`ns (495%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `900`ns (891%)        | `1,100`ns (1,089%)             | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (990%)      | `1,100`ns (1,089%)             | `1,000,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,401`ns (3,367%)    | `3,601`ns (3,565%)             | `294,031`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `301`ns (298%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (298%)        | `400`ns (396%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,400`ns (1,386%)    | `1,700`ns (1,683%)             | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,402`ns (1,388%)    | `1,601`ns (1,585%)             | `713,267`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,103`ns (4,062%)    | `4,403`ns (4,359%)             | `243,724`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (4,656%)    | `4,903`ns (4,854%)             | `212,630`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `301`ns (100%)        | `301`ns (100%)                 | `3,322,259`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `301`ns (100%)        | `400`ns (133%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `400`ns (133%)        | `401`ns (133%)                 | `2,500,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |

<!-- endblock(results) -->
