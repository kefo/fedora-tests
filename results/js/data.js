var data = [
    {
        "directory": "test01",
        "name": "Test 1",
        "description": "2000 records ingested (some PUTs, some PATCHes)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -XX:MaxMetaspaceSize=512M -Xms1g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test02",
        "name": "Test 2",
        "description": "5000 records ingested (some PUTs, some PATCHes)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -XX:MaxMetaspaceSize=512M -Xms1g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test03",
        "name": "Test 3",
        "description": "5000 records ingested (all PATCHes)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms2g -Xmx2g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test04",
        "name": "Test 4",
        "description": "5000 records ingested (all PATCHes)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -XX:MaxMetaspaceSize=512M -Xms1g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test05",
        "name": "Test 5",
        "description": "5000 records ingested (all PATCHes)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms4g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test06",
        "name": "Test 6",
        "description": "5000 records ingested (all PUTs; time elapsed 0:07:52)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -XX:MaxMetaspaceSize=512M -Xms1g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test07",
        "name": "Test 7",
        "description": "10000 records ingested (all PUTs; time elapsed 0:20:40)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -XX:MaxMetaspaceSize=512M -Xms1g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test08",
        "name": "Test 8",
        "description": "10000 records ingested (all PUTs; time elapsed 0:23:35)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms2g -Xmx2g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test09",
        "name": "Test 9",
        "description": "10000 records ingested (all PUTs; time elapsed 0:23:02)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms4g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test10",
        "name": "Test 10",
        "description": "10000 records deleted (all DELETEs; time elapsed 0:39:59)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms4g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test11",
        "name": "Test 11",
        "description": "10000 records ingested with at least one relation (all PUTs; time elapsed 0:17:46)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -XX:MaxMetaspaceSize=512M -Xms1g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test12",
        "name": "Test 12",
        "description": "10000 records deleted (all DELETEs; time elapsed 0:33:03)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -XX:MaxMetaspaceSize=512M -Xms1g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test13",
        "name": "Test 13",
        "description": "10000 records ingested with at least one relation (all PUTs; time elapsed 0:19:43)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms2g -Xmx2g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test14",
        "name": "Test 14",
        "description": "10000 records deleted (all DELETEs; time elapsed 0:34:33)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms2g -Xmx2g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test15",
        "name": "Test 15",
        "description": "10000 records ingested with at least one relation (all PUTs; time elapsed 0:18:36)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms4g -Xmx4g -XX:+DisableExplicitGC"
    },
    {
        "directory": "test16",
        "name": "Test 16",
        "description": "10000 records deleted (all DELETEs; time elapsed 0:33:58)",
        "jvmoptions": "-XX:+UseG1GC -XX:ConcGCThreads=5 -XX:MaxGCPauseMillis=400 -XX:ParallelGCThreads=20 -Xms4g -Xmx4g -XX:+DisableExplicitGC"
    }
];